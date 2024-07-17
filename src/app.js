import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config.js';
import bibliographicMaterialRoutes from './routes/bibliographic.material.routes.js';
import authorRoutes from './routes/authors.routes.js';
import editorialRoutes from './routes/editorials.routes.js';
import formatRoutes from './routes/formats.routes.js';
import materialStateRoutes from './routes/materials.state.routes.js';
import materialTypeRoutes from './routes/materials.type.routes.js';
import loanRoutes from './routes/loans.routes.js';
import userRoutes from './routes/users.routes.js';
import authRoutes from './routes/auth.routes.js';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno

const app = express();

// Middlewares
app.use(express.json()); // Servidor interpreta .json y guarda en req.body
app.use(cors({
    origin: 'http://localhost:5173', // your frontend URL
    credentials: true
}));
app.use(cookieParser());

app.use((req, res, next) => {
    const token = req.cookies.access_token;
    req.session = { user: null };

    try {
        const data = jwt.verify(token, SECRET_KEY);
        req.session.user = data;
    } catch {}

    next();
});

// Rutas con prefijos
app.use(bibliographicMaterialRoutes);
app.use(authorRoutes);
app.use(editorialRoutes);
app.use(formatRoutes);
app.use(materialStateRoutes);
app.use(materialTypeRoutes);
app.use(loanRoutes);
app.use(userRoutes);
app.use('/auth', authRoutes);

export default app;
