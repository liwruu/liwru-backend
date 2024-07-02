import { Loan } from '../models/Loan.js';

export const getLoans = async (req, res) => {
    try {
        const loan = await Loan.findAll();
        res.json(loan);
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

            return res.json({ message: 'Loan extended successfully.' });
        } else {
            return res.status(400).json({ message: 'Loan cannot be extended.' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};