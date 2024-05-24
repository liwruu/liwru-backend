import { Router } from "express";
import { 
    getMaterialTypes,
    createMaterialType,
    updateMaterialType,
    deleteMaterialType,
    getMaterialType
} from "../controllers/materials.type.controller.js";

const router = Router();

router.get('/material/Type', getMaterialTypes); //Obtener
router.post('/material/Type', createMaterialType); //Crear
router.put('/material/Type/:id', updateMaterialType); //Actualizar
router.delete('/material/Type/:id', deleteMaterialType); //Eliminar
router.get('/material/Type/:id', getMaterialType); //Obtener uno solo

export default router;
