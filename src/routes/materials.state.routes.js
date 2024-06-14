import { Router } from "express";
import { 
    getMaterialStates,
    createMaterialState,
    updateMaterialState,
    deleteMaterialState,
    getMaterialState
} from "../controllers/materials.state.controller.js";

const router = Router();

router.get('/material/state', getMaterialStates); //Obtener
router.post('/material/state', createMaterialState); //Crear
router.put('/material/state/:id', updateMaterialState); //Actualizar
router.delete('/material/state/:id', deleteMaterialState); //Eliminar
router.get('/material/state/:id', getMaterialState); //Obtener uno solo

export default router;
