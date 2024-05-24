import express from 'express';
import biblioRoutes from './routes/bibliomat.routes.js';

const app = express();

//middlewares
app.use(express.json());

app.use(biblioRoutes);

export default app;