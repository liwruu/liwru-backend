import { Router } from "express";
import multer from 'multer';
import {
    getBibliographicMaterials,
    createBibliographicMaterial,
    updateBibliographicMaterial,
    deleteBibliographicMaterial,
    getBibliographicMaterial,
} from "../controllers/bibliographic.material.controller.js";

const router = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/material/bibliographic', getBibliographicMaterials); // Obtener todos los materiales
router.post('/material/bibliographic', upload.single('image'), createBibliographicMaterial); // Crear un material
router.put('/material/bibliographic/:id', upload.single('image'), updateBibliographicMaterial); // Actualizar un material
router.delete('/material/bibliographic/:id', deleteBibliographicMaterial); // Eliminar un material
router.get('/material/bibliographic/:id', getBibliographicMaterial); // Obtener un solo material

export default router;