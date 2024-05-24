import { Router } from "express";
import { 
    getEditorials,
    createEditorial,
    updateEditorial,
    deleteEditorial,
    getEditorial,
} from "../controllers/editorials.controller.js";

const router = Router();

router.get('/editorials', getEditorials); //Obtener todos los autores
router.post('/editorials', createEditorial); //Crear un autor
router.put('/editorials/:id', updateEditorial); //Actualizar un autor
router.delete('/editorials/:id', deleteEditorial); //Eliminar un autor
router.get('/editorials/:id', getEditorial); //Obtener un solo autor

export default router;


