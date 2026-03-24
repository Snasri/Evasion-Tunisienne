import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// GET /api/sessions/availability - Provide remaining count for each date
router.get('/sessions/availability', async (req, res) => {
    try {
        const allReservations = await prisma.reservation.findMany({ where: { status: 'confirmed' } });
        const grouped = {};
        allReservations.forEach(r => {
            const dateStr = r.date.toISOString().split('T')[0];
            if (!grouped[dateStr]) grouped[dateStr] = 0;
            grouped[dateStr] += r.participants;
        });
        
        const availability = {};
        Object.keys(grouped).forEach(date => {
            availability[date] = Math.max(0, 16 - grouped[date]);
        });
        res.json(availability);
    } catch (error) {
        console.error('Error fetching availability:', error);
        res.status(500).json({ error: 'Failed to fetch availability' });
    }
});

// POST /api/reservations - Create a new reservation with 13 max validation
router.post('/reservations', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, date, participants, totalPrice } = req.body;

        if (!firstName || !lastName || !email || !phone || !date || !participants) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const dateObj = new Date(date);
        const startOfDay = new Date(dateObj.setHours(0,0,0,0));
        const endOfDay = new Date(dateObj.setHours(23,59,59,999));

        // Validation max 16
        const existing = await prisma.reservation.findMany({
            where: { 
                date: { gte: startOfDay, lte: endOfDay },
                status: 'confirmed'
            }
        });
        const total = existing.reduce((sum, r) => sum + r.participants, 0);
        if (total + parseInt(participants, 10) > 16) {
            return res.status(400).json({ error: 'Session complête ou nombre de places insuffisant' });
        }

        const reservation = await prisma.reservation.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                date: new Date(date),
                participants: parseInt(participants, 10),
                totalPrice: parseFloat(totalPrice || 0),
                paymentStatus: 'pending',
                status: 'confirmed'
            },
        });

        res.status(201).json(reservation);
    } catch (error) {
        console.error('Error creating reservation:', error);
        res.status(500).json({ error: 'Failed to create reservation', message: error.message });
    }
});

// Diagnostic endpoint
router.get('/debug/db', async (req, res) => {
    try {
        await prisma.$queryRaw`SELECT 1`;
        res.json({ status: 'ok', database: 'connected' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message, stack: error.stack });
    }
});

// --- ADMIN ROUTES --- //

router.post('/admin/login', (req, res) => {
    const submittedPassword = (req.body.password || "").trim().toLowerCase();
    const expectedPassword = "evasion2026";
    
    console.log(`Login attempt: Submitted [${submittedPassword}] vs Expected [${expectedPassword}]`);
    
    if (submittedPassword === expectedPassword) {
        res.json({ token: 'evasion2026' });
    } else {
        res.status(401).json({ error: 'Invalid password' });
    }
});

// Middleware for admin validation
const adminAuth = (req, res, next) => {
    if (req.headers.authorization !== 'Bearer evasion2026') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};

router.get('/admin/sessions', adminAuth, async (req, res) => {
    try {
        const allRes = await prisma.reservation.findMany({
            orderBy: { date: 'asc' }
        });
        
        const sessionsMap = {};
        allRes.forEach(r => {
            const dateStr = r.date.toISOString().split('T')[0];
            if (!sessionsMap[dateStr]) {
                sessionsMap[dateStr] = { date: dateStr, reservations: [], totalParticipants: 0, status: 'Active' };
            }
            sessionsMap[dateStr].reservations.push(r);
            if (r.status === 'confirmed') {
                sessionsMap[dateStr].totalParticipants += r.participants;
            }
        });
        
        const sessions = Object.values(sessionsMap).map(s => {
            if (s.reservations.every(r => r.status === 'cancelled')) {
                s.status = 'Annulée';
            } else if (s.totalParticipants >= 7) {
                s.status = 'Validée';
            } else {
                s.status = 'À risque (< 7)';
            }
            return s;
        });
        
        res.json(sessions);
    } catch(err) {
        res.status(500).json({ error: 'Failed to fetch sessions' });
    }
});

router.post('/admin/sessions/cancel', adminAuth, async (req, res) => {
    try {
        const { date } = req.body;
        const d = new Date(date);
        const startOfDay = new Date(d.setHours(0,0,0,0));
        const endOfDay = new Date(d.setHours(23,59,59,999));
        
        await prisma.reservation.updateMany({
            where: { date: { gte: startOfDay, lte: endOfDay } },
            data: { status: 'cancelled' }
        });
        res.json({ success: true });
    } catch(err) {
        res.status(500).json({ error: 'Failed to cancel session' });
    }
});

export default router;
