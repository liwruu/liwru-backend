import { BibliographicMaterial } from '../models/BibliographicMaterial.js';
import { Author } from '../models/Author.js';

export const getBibliographicMaterials = async (req, res) => {
    try {
        const bibliographicMaterials = await BibliographicMaterial.findAll({
            include: [{
                model: Author,
                through: { attributes: [] }
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
                through: { attributes: [] }
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
        const { title, isbn, pages, year, description, type, authorId, category } = req.body;
        const image = req.file;

        if (!image) {
            return res.status(400).json({ message: 'Image is required' });
        }

        const newBibliographicMaterial = await BibliographicMaterial.create({
            title,
            isbn,
            pages,
            year,
            description,
            type,
            authorId,
            category,
            image: image.buffer
        });

        res.json(newBibliographicMaterial);
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