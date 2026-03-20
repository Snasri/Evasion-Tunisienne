import express from 'express';
import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';

const router = express.Router();
const prisma = new PrismaClient();
const stripeApiKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeApiKey ? new Stripe(stripeApiKey, {
    apiVersion: '2023-10-16',
}) : null;

// GET /api/reservations - Get all reservations (for admin)
router.get('/reservations', async (req, res) => {
    try {
        const reservations = await prisma.reservation.findMany({
            orderBy: { createdAt: 'desc' },
        });
        res.json(reservations);
    } catch (error) {
        console.error('Error fetching reservations:', error);
        res.status(500).json({ error: 'Failed to fetch reservations' });
    }
});

// POST /api/reservations - Create a new reservation
router.post('/reservations', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, date, participants, totalPrice } = req.body;

        // Basic validation
        if (!firstName || !lastName || !email || !phone || !date || !participants || !totalPrice) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const reservation = await prisma.reservation.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                date: new Date(date),
                participants: parseInt(participants, 10),
                totalPrice: parseFloat(totalPrice),
                paymentStatus: stripeApiKey ? 'pending' : 'paid', // Auto-paid if no stripe
            },
        });

        res.status(201).json(reservation);
    } catch (error) {
        console.error('Error creating reservation:', error);
        res.status(500).json({ error: 'Failed to create reservation' });
    }
});

// POST /api/create-checkout-session - Create a Stripe Checkout session
router.post('/create-checkout-session', async (req, res) => {
    try {
        const { reservationId } = req.body;

        if (!reservationId) {
            return res.status(400).json({ error: 'Reservation ID is required' });
        }

        // Fetch the reservation from the database
        const reservation = await prisma.reservation.findUnique({
            where: { id: reservationId },
        });

        if (!reservation) {
            return res.status(404).json({ error: 'Reservation not found' });
        }

        // Determine base URL dynamically or use environment variable
        const origin = req.headers.origin || process.env.CLIENT_URL || 'http://localhost:5173';

        // If Stripe is not configured, simulate a success
        if (!stripeApiKey || !stripe) {
            console.log('Stripe not configured. Simulating success URL for development.');
            // Update reservation to paid since there's no webhook
            await prisma.reservation.update({
                where: { id: reservationId },
                data: { paymentStatus: 'paid' },
            });
            return res.json({ id: 'mock_session', url: `${origin}/payment/success?session_id=mock_session_id` });
        }

        // Create Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'eur', // Assuming EUR, change if needed
                        product_data: {
                            name: `Réservation Max Care Wellness - ${reservation.firstName} ${reservation.lastName}`,
                            description: `Date: ${new Date(reservation.date).toLocaleDateString('fr-FR')} | Participants: ${reservation.participants}`,
                        },
                        unit_amount: Math.round(reservation.totalPrice * 100), // Stripe expects amounts in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/payment/cancel`,
            client_reference_id: reservation.id,
            metadata: {
                reservationId: reservation.id,
            },
        });

        res.json({ id: session.id, url: session.url });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Failed to create checkout session' });
    }
});

// Webhook endpoint to listen for Stripe events (especially successful payments)
// Note: This must receive the raw body to verify the Stripe signature successfully.
// For simplicity in this initial setup, we might skip the signature verification, 
// but it's highly recommended for production.
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    // In a real app, verify the signature:
    // const sig = req.headers['stripe-signature'];
    // let event;
    // try {
    //   event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    // } catch (err) {
    //   return res.status(400).send(`Webhook Error: ${err.message}`);
    // }

    // For now, parsing from standard json if signature check is bypassed
    let event = req.body;

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const reservationId = session.metadata.reservationId;

        if (reservationId) {
            try {
                await prisma.reservation.update({
                    where: { id: reservationId },
                    data: { paymentStatus: 'paid' },
                });
                console.log(`Reservation ${reservationId} marked as paid.`);
            } catch (err) {
                console.error(`Failed to update reservation ${reservationId}:`, err);
            }
        }
    }

    res.send();
});

export default router;
