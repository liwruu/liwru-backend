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
            where: { username: req.params.username }
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
            username: req.body.username,
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
            username: req.body.username,
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
        },{
            where: { username: req.params.username }
        });
        res.json(User)
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try{
        await User.destroy({
            where: { username: req.params.username },
        });
        res.sendStatus(204);
    } catch(error){
        return res.status(500).json( { message: error.message });
    };
};

export const getUserLoan = async (req, res) => {
    try{
        const user = await User.findOne({
            where: { username: req.params.username },
          });
          
        const usernameId = user? user.id : null;
        const loans = await Loan.findAll({
            where: {
                userId: usernameId, 
            }
        });
        if(!loans) return res.status(500).json( { message: 'User has no loans' });
        res.json(loans);
    } catch(error){
        return res.status(500).json( { message: error.message });
    };
}