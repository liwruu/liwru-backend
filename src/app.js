import express from 'express';
import bibliograpichMaterialRoutes from './routes/bibliographic.material.routes.js';
import authorRoutes from './routes/authors.routes.js';
import editorialRoutes from './routes/editorials.routes.js';
import formatRoutes from './routes/formats.routes.js';
import materialStateRoutes from './routes/materials.state.routes.js';
import materialTypeRoutes from './routes/materials.type.routes.js';
import loanRoutes from './routes/loans.routes.js';
import userRoutes from './routes/users.routes.js';

const app = express();

//middlewares
app.use(express.json()); //Servidor interpreta .json y guarda en un req.body

app.use(bibliograpichMaterialRoutes);
app.use(authorRoutes);
app.use(editorialRoutes);
app.use(formatRoutes);
app.use(materialStateRoutes);
app.use(materialTypeRoutes);
app.use(loanRoutes);
app.use(userRoutes);

export default app;