import { Router } from "express";
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

router.get('/material/bibliographic', getBibliographicMaterials); //Obtener todos los autores
router.post('/material/bibliographic', upload.single('image'), createBibliographicMaterial); //Crear un autor
router.put('/material/bibliographic/:id', updateBibliographicMaterial); //Actualizar un autor
router.delete('/material/bibliographic/:id', deleteBibliographicMaterial); //Eliminar un autor
router.get('/material/bibliographic/:id', getBibliographicMaterial); //Obtener un solo autor

export default router;


