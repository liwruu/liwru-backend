import { Loan } from '../models/Loan.js';
import { User } from '../models/User.js';

export const getUsers = async (req, res) => {
    try{
        const user = await User.findAll();
        res.json(user);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const getUser = async (req, res) => {
    try{
        const user = await User.findOne({
            where: { id: req.params.id }
        });

        if(!user) return res.status(500).json( { message: 'User does not exist' });
        res.json(user);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const createUser = async (req, res) => {
    try{
        const newUser = await User.create({
            id: req.body.id,
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        });
        res.json(newUser);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const updateUser = async (req, res) => {
    try{
        await User.update({
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
        },{
            where: { id: req.params.id }
        });
        res.json(User)
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try{
        await User.destroy({
            where: { id: req.params.id },
        });
        res.sendStatus(204);
    } catch(error){
        return res.status(500).json( { message: error.message });
    };
};

export const getUserLoan = async (req, res) => {
    try{
        const { id } = req.param
        const loans = await Loan.findAll({
            where: {
                userId: id,
            }
        });
        if(!loans) return res.status(500).json( { message: 'User has no loans' });
        res.json(loans);
    } catch(error){
        return res.status(500).json( { message: error.message });
    };
}