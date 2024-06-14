import express from 'express';
import cors from 'cors';
import bibliographicMaterialRoutes from './routes/bibliographic.material.routes.js';
import authorRoutes from './routes/authors.routes.js';
import editorialRoutes from './routes/editorials.routes.js';
import formatRoutes from './routes/formats.routes.js';
import materialStateRoutes from './routes/materials.state.routes.js';
import materialTypeRoutes from './routes/materials.type.routes.js';
import loanRoutes from './routes/loans.routes.js';
import userRoutes from './routes/users.routes.js';
import authRoutes from './routes/auth.routes.js';
import sessionConfig from './config/session.config.js';

const app = express();

// Middlewares
app.use(express.json()); // Servidor interpreta .json y guarda en req.body
app.use(cors());
app.use(sessionConfig);

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
