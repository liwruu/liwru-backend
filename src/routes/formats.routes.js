import { Router } from "express";
import { 
    createFormat, 
    deleteFormat, 
    getFormat, 
    getFormats, 
    updateFormat 
} from "../controllers/formats.controller.js";

const router = Router();

router.get('/formats', getFormats); //Obtener todos los autores
router.post('/formats', createFormat); //Crear un autor
router.put('/formats/:id', updateFormat); //Actualizar un autor
router.delete('/formats/:id', deleteFormat); //Eliminar un autor
router.get('/formats/:id', getFormat); //Obtener un solo autor

export default router;
