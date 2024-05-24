import { Router } from "express";
import { 
    getBiblioMats, 
    createBiblioMat,
} from "../controllers/bibliomat.controller.js";

const router = Router();

router.get('/bibliographicMaterial', getBiblioMats); //Obtener todos los materiales bibliograficos
router.post('/bibliographicMaterial', createBiblioMat); //Crear material bibliografico
router.put('/bibliographicMaterial/:id'); //Actualizar material bibliografico
router.delete('/bibliographicMaterial/:id'); //Eliminar material bibliografico
router.get('/bibliographicMaterial/:id'); //Obtener un solo material bibliografico

export default router


