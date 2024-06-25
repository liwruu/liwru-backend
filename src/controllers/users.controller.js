import bcrypt from 'bcrypt';
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

export const getUserSession = async (req, res) => {
    try {
        //const { user } = req.session
        
op
        const user = await User.findOne({
            where: { username: req.session.user.username }
        });
      
        if (!user) return res.status(500).json({ message: 'User does not exist' })
        res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message});
    }
};


export const createUser = async (req, res) => {
    try {
        const existingUser = await User.findOne({ where: { username: req.body.username } });

        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = await User.create({
            username: req.body.username,
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashedPassword,
        });

        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({ message: error.message });
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

export const accVerify = async (res, req) => {
    try{
        const user = await User.findOne({
            where: { username: req.params.username },
        })
        if(user.verified){
            return res.status(400).json({ message: 'User is already verified' });
        }
    }catch(error){

    }
};

export const newPassword = async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        await User.update({
            password: hashedPassword
        },{
            where: { username: req.params.username }
        });
        res.send("Mensaje exitoso")
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};