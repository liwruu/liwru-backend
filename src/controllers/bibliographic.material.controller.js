// controllers/bibliographicMaterial.controller.js
import { BibliographicMaterial } from '../models/BibliographicMaterial.js';

export const getBibliographicMaterials = async (req, res) => {
    try {
        const bibliographicMaterials = await BibliographicMaterial.findAll({
            include: [{
                model: Author,
                through: { attributes: [] } // Excluir atributos de la tabla intermedia
            }]
        });
        res.json(bibliographicMaterials);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getBibliographicMaterial = async (req, res) => {
    try {
        const bibliographicMaterial = await BibliographicMaterial.findOne({
            where: { id: req.params.id },
            include: [{
                model: Author,
                through: { attributes: [] } // Excluir atributos de la tabla intermedia
            }]
        });

        if (!bibliographicMaterial) return res.status(404).json({ message: 'Material not found' });
        res.json(bibliographicMaterial);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createBibliographicMaterial = async (req, res) => {
    try {
        const { title, isbn, pages, year, description } = req.body;
        const imageBuffer = req.file.buffer;
        const newBibliographicMaterial = await BibliographicMaterial.create({
            title,
            isbn,
            pages,
            year,
            description,
            image: imageBuffer
        });
        res.status(201).json(newBibliographicMaterial);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


export const updateBibliographicMaterial = async (req, res) => {
    try {
        const [updated] = await BibliographicMaterial.update(req.body, {
            where: { id: req.params.id }
        });

        if (!updated) return res.status(404).json({ message: 'Material not found' });

        const updatedMaterial = await BibliographicMaterial.findOne({ where: { id: req.params.id } });
        res.json(updatedMaterial);
    } catch (error) {
        return res.status(500).json({ message: error.message });
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
