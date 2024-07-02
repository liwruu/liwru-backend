import { Router } from "express";
import { 
    createLoan,
    deleteLoan,
    extendLoan,
    getLoan,
    getLoans,
    updateLoan,
} from '../controllers/loans.controller.js';

const router = Router();

router.get('/loans', getLoans);
router.post('/loans', createLoan);
router.put('/loans/:id', updateLoan);
router.delete('/loans/:id', deleteLoan);
router.get('/loans/:id', getLoan);
router.put('/extend/loans/:id', extendLoan);

export default router;