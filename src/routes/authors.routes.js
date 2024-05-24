import { Router } from "express";
import { 
    getAuthors, 
    createAuthor,
    updateAuthor,
    deleteAuthor,
    getAuthor,
} from "../controllers/authors.controller.js";

const router = Router();

router.get('/authors', getAuthors); //Obtener todos los autores
router.post('/authors', createAuthor); //Crear un autor
router.put('/authors/:id', updateAuthor); //Actualizar un autor
router.delete('/authors/:id', deleteAuthor); //Eliminar un autor
router.get('/authors/:id', getAuthor); //Obtener un solo autor

export default router;


