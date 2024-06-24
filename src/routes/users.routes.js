import { Router } from "express";
import { 
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser,
    getUserLoan,
    getUserSession
} from '../controllers/users.controller.js';

const router = Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.put('/users/:username', updateUser);
router.delete('/users/:username', deleteUser);
router.get('/users/:username', getUser);
router.get('/users/:username/loans', getUserLoan);
router.get('/user', getUserSession);

export default router;