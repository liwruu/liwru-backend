import express from 'express';
import authorRoutes from './routes/authors.routes.js';

const app = express();

//middlewares
app.use(express.json()); //Servidor interpreta .json y guarda en un req.body

app.use(authorRoutes);

export default app;