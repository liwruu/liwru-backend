import { Editorial } from '../models/Editorial.js';

export const getEditorials = async (req, res) => {
    try{
        const editorials = await Editorial.findAll();
        res.json(editorials);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const getEditorial = async (req, res) => {
    try{
        const editorial = await Editorial.findOne({
            where: { id: req.params.id }
        });

        if(!editorial) return res.status(500).json( { message: 'Editorial does not exist' });
        res.json(editorial);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const createEditorial = async (req, res) => {
    try{
        const newEditorial = await Editorial.create({
            name: req.body.name,
        });
        res.json(newEditorial);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const updateEditorial = async (req, res) => {
    try{
        await Editorial.update({
            name: req.body.name,
        },{
            where: { id: req.params.id }
        });
        res.json(Editorial)
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const deleteEditorial = async (req, res) => {
    try{
        await Editorial.destroy({
            where: { id: req.params.id },
        });
        res.sendStatus(204);
    } catch(error){
        return res.status(500).json( { message: error.message });
    };
};