// controllers/bibliographicMaterial.controller.js
import { BibliographicMaterial } from '../models/BibliographicMaterial.js';

export const getBibliographicMaterials = async (req, res) => {
    try {
        const bibliographicMaterial = await BibliographicMaterial.findAll();
        res.json(bibliographicMaterial);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getBibliographicMaterial = async (req, res) => {
    try {
        const bibliographicMaterial = await BibliographicMaterial.findOne({
            where: { id: req.params.id },
        });

        if (!bibliographicMaterial) return res.status(404).json({ message: 'Material not found' });
        res.json(bibliographicMaterial);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createBibliographicMaterial = async (req, res) => {
    try {
        const newBibliographicMaterial = await BibliographicMaterial.create(req.body);
        res.json(newBibliographicMaterial);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateBibliographicMaterial = async (req, res) => {
    try{
        await BibliographicMaterial.update({
            title: req.body.title,
            name: req.body.name,
        },{
            where: { id: req.params.id }
        });
        res.json(Editorial)
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const deleteBibliographicMaterial = async (req, res) => {
    try {
        const deleted = await BibliographicMaterial.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.sendStatus(204);
        } else {
            res.status(404).json({ message: 'Material not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
