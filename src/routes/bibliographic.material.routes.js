import { Router } from "express";
import {
    getBibliographicMaterials,
    createBibliographicMaterial,
    updateBibliographicMaterial,
    deleteBibliographicMaterial,
    getBibliographicMaterial,
} from "../controllers/bibliographic.material.controller.js";

const router = Router();

router.get('/material/bibliographic', getBibliographicMaterials); //Obtener todos los autores
router.post('/material/bibliographic', createBibliographicMaterial); //Crear un autor
router.put('/material/bibliographic/:id', updateBibliographicMaterial); //Actualizar un autor
router.delete('/material/bibliographic/:id', deleteBibliographicMaterial); //Eliminar un autor
router.get('/material/bibliographic/:id', getBibliographicMaterial); //Obtener un solo autor

export default router;


