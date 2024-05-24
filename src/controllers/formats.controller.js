import { Format } from '../models/Format.js';

export const getFormats = async (req, res) => {
    try{
        const formats = await Format.findAll();
        res.json(formats);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const getFormat = async (req, res) => {
    try{
        const format = await Format.findOne({
            where: { id: req.params.id }
        });

        if(!format) return res.status(500).json( { message: 'Format does not exist' });
        res.json(format);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const createFormat = async (req, res) => {
    try{
        const newFormat = await Format.create({
            id: req.body.id,
            description: req.body.description,
        });
        res.json(newFormat);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const updateFormat = async (req, res) => {
    try{
        await Format.update({
            description: req.body.description,
        },{
            where: { id: req.params.id }
        });
        res.json(Format)
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const deleteFormat = async (req, res) => {
    try{
        await Format.destroy({
            where: { id: req.params.id },
        });
        res.sendStatus(204);
    } catch(error){
        return res.status(500).json( { message: error.message });
    };
};