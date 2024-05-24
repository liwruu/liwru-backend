import express from 'express';
import authorRoutes from './routes/authors.routes.js';
import editorialRoutes from './routes/editorials.routes.js';

const app = express();

//middlewares
app.use(express.json()); //Servidor interpreta .json y guarda en un req.body

app.use(authorRoutes);
app.use(editorialRoutes);

export default app;