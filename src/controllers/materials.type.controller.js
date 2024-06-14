import { MaterialType } from '../models/MaterialType.js';

export const getMaterialTypes = async (req, res) => {
    try{
        const materialType = await MaterialType.findAll();
        res.json(materialType);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const getMaterialType = async (req, res) => {
    try{
        const materialType = await MaterialType.findOne({
            where: { id: req.params.id }
        });

        if(!materialType) return res.status(500).json( { message: 'MaterialType does not exist' });
        res.json(materialType);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const createMaterialType = async (req, res) => {
    try{
        const newMaterialType = await MaterialType.create({
            id: req.body.id,
            description: req.body.description,
        });
        res.json(newMaterialType);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const updateMaterialType = async (req, res) => {
    try{
        await MaterialType.update({
            description: req.body.description,
        },{
            where: { id: req.params.id }
        });
        res.json(MaterialType)
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const deleteMaterialType = async (req, res) => {
    try{
        await MaterialType.destroy({
            where: { id: req.params.id },
        });
        res.sendStatus(204);
    } catch(error){
        return res.status(500).json( { message: error.message });
    };
};