import { Router } from "express";
import { 
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser,
    getUserLoan,
    newPassword,
    getUserSession,
    sendEmail,
    validateVerificationCode // Asegúrate de importar esta función
} from '../controllers/users.controller.js';

const router = Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.put('/users/:username', updateUser);
router.delete('/users/:username', deleteUser);
router.get('/users/:username', getUser);
router.get('/users/:username/loans', getUserLoan);
router.put('/users/newpassword/:username', newPassword);
router.get('/user', getUserSession);
router.post('/send-email', sendEmail);
router.post('/validate-verification-code', validateVerificationCode); // Añade esta ruta

export default router;
