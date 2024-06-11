import { Router } from "express";
import { 
    loginUser,
    logoutUser,
} from '../controllers/auth.controller.js'
import { isAuthenticated } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/login', loginUser); //Crear un autor
router.post('/logout', logoutUser); //Actualizar un autor

router.get('/protected', isAuthenticated, (req, res) => {
    res.status(200).json({ message: 'You have access to this route' });
});

export default router;
