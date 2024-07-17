import { where } from 'sequelize';
import { Loan } from '../models/Loan.js';
import { User } from '../models/User.js';

export const getLoans = async (req, res) => {
    try {
        const loan = await Loan.findAll();
        res.json(loan);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getUserLoans = async (req, res) => {
    try {
        const { id } = req.params;
        const loans = await Loan.findAll({
            where: { userId: id } 
        });
        res.json(loans);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



export const getLoan = async (req, res) => {
    try {
        const loan = await Loan.findOne({
            where: { id: req.params.id }
        });

        if (!loan) return res.status(500).json({ message: 'Loan does not exist' });
        res.json(loan);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createLoan = async (req, res) => {
    try {
        const { bibliographicMaterialId, userId } = req.body;
        const newLoan = await Loan.create({
            bibliographicMaterialId,
            userId,   
        });
        res.json(newLoan);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
};

export const updateLoan = async (req, res) => {
    try {
        await Loan.update({
            returnDate: req.body.returnDate,
            loanExtension: req.body.loanExtension,
        }, {
            where: { id: req.params.id }
        });
        res.json(Loan)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
};

export const deleteLoan = async (req, res) => {
    try {
        await Loan.destroy({
            where: { id: req.params.id },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
};

export const extendLoan = async (req, res) => {
    try {
        const { id } = req.params;
        const loan = await Loan.findOne({ where: { id } });
        
        if (!loan) {
            return res.status(404).json({ message: 'Loan does not exist.' });
        }

        if (!loan.loanExtension) {
            const returnExtensionDate = new Date(loan.returnDate);
            returnExtensionDate.setDate(returnExtensionDate.getDate() + 7);

            await Loan.update(
                { 
                    returnExtensionDate: returnExtensionDate,
                    loanExtension: true,
                    state: 'Aplazado'
                },
                { where: { id } }
            );

            return res.status(200).json({ message: 'Loan extended successfully.' });
        } else {
            return res.status(400).json({ message: 'Loan cannot be extended.' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createLoanRFID = async (req, res) => {
    let uid1 = req.body.uid1;
    let uid2 = req.body.uid2;

    if (uid1 == '5baa7f6c') uid1 = '5';
    else if (uid1 == '26c40f63') uid1 = 'EPP';
    if (uid2 == '26c40f63') uid2 = 'EPP';
    else if (uid2 == '5baa7f6c') uid2 = '5';

    try{
        const newLoanTry1 = await Loan.create({
            bibliographicMaterialId: uid1,
            userId: uid2,
        });
        res.json(newLoanTry1);
    } catch {
        try {
            const newLoanTry2 = await Loan.create({
                bibliographicMaterialId: uid2,
                userId: uid1,
            });
            res.json(newLoanTry2);
        } catch (error) {
            res.send(error.message);
        }
    }
};