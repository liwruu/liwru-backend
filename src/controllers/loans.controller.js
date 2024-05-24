import { Loan } from '../models/Loan.js';

export const getLoans = async (req, res) => {
    try{
        const loan = await Loan.findAll();
        res.json(loan);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const getLoan = async (req, res) => {
    try{
        const loan = await Loan.findOne({
            where: { id: req.params.id }
        });

        if(!loan) return res.status(500).json( { message: 'Loan does not exist' });
        res.json(loan);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const createLoan = async (req, res) => {
    try{
        const newLoan = await Loan.create({
            id,
            loanDate,
            returnDate,
            loanExtension,
            bibliographicMaterialId,
            userId,
        });
        res.json(newLoan);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const updateLoan = async (req, res) => {
    try{
        await Loan.update({
            returnDate: req.body.returnDate,
            loanExtension: req.body.loanExtension,
        },{
            where: { id: req.params.id }
        });
        res.json(Loan)
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try{
        await Loan.destroy({
            where: { id: req.params.id },
        });
        res.sendStatus(204);
    } catch(error){
        return res.status(500).json( { message: error.message });
    };
};