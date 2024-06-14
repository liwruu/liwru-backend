import { MaterialState } from '../models/MaterialState.js';

export const getMaterialStates = async (req, res) => {
    try{
        const materialState = await MaterialState.findAll();
        res.json(materialState);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const getMaterialState = async (req, res) => {
    try{
        const materialState = await MaterialState.findOne({
            where: { id: req.params.id }
        });

        if(!materialState) return res.status(500).json( { message: 'MaterialState does not exist' });
        res.json(materialState);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const createMaterialState = async (req, res) => {
    try{
        const newMaterialState = await MaterialState.create({
            id: req.body.id,
            description: req.body.description,
        });
        res.json(newMaterialState);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const updateMaterialState = async (req, res) => {
    try{
        await MaterialState.update({
            description: req.body.description,
        },{
            where: { id: req.params.id }
        });
        res.json(MaterialState)
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const deleteMaterialState = async (req, res) => {
    try{
        await MaterialState.destroy({
            where: { id: req.params.id },
        });
        res.sendStatus(204);
    } catch(error){
        return res.status(500).json( { message: error.message });
    };
};