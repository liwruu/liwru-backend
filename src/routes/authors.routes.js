import { Router } from "express";
import { 
    getAuthors, 
    createAuthor,
} from "../controllers/authors.controller.js";

const router = Router();

router.get('/authors', getAuthors); //Obtener todos los materiales bibliograficos
router.post('/authors', createAuthor); //Crear material bibliografico
router.put('/authors/:id'); //Actualizar material bibliografico
router.delete('/authors/:id'); //Eliminar material bibliografico
router.get('/authors/:id'); //Obtener un solo material bibliografico

export default router


