import { Router } from "express";
import { 
    createLoan,
    deleteLoan,
    getLoan,
    getLoans,
    getUserLoans,
    updateLoan,
} from '../controllers/loans.controller.js';

const router = Router();

router.get('/loans', getLoans);
router.get('/loans/:userID',getUserLoans)
router.post('/loans', createLoan);
router.put('/loans/:id', updateLoan);
router.delete('/loans/:id', deleteLoan);
router.get('/loans/:id', getLoan);

export default router;