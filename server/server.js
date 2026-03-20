import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Initialize Prisma
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Import and use routes
import apiRoutes from './routes/api.js';
app.use('/api', apiRoutes);

// Initialisation du serveur
app.listen(port, () => {
  console.log(`[BACKEND] Serveur démarré sur le port ${port}`);
  console.log(`[BACKEND] Routes API prêtes sur http://localhost:${port}/api`);
}).on('error', (err) => {
  console.error('[BACKEND] Erreur au démarrage du serveur:', err);
});

// Empêcher l'arrêt immédiat pour débogage si nécessaire
process.on('uncaughtException', (err) => {
  console.error('[BACKEND] Erreur non gérée:', err);
});
