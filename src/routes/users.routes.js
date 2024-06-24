import { Router } from "express";
import { 
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser,
    getUserLoan,
    getUserSession,
} from '../controllers/users.controller.js';

const router = Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.put('/users/:username', updateUser);
router.delete('/users/:username', deleteUser);
router.get('/users/:username', getUser);
router.get('/user', getUserSession);
router.get('/users/:username/loans', getUserLoan);

export default router;