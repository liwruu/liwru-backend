import { Author } from '../models/Author.js';

export const getAuthors = async (req, res) => {
    try{
        const authors = await Author.findAll();
        res.json(authors);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const getAuthor = async (req, res) => {
    try{
        const author = await Author.findOne({
            where: { id: req.params.id }
        });

        if(!author) return res.status(500).json( { message: 'Author does not exist' });
        res.json(author);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const createAuthor = async (req, res) => {
    try{
        const newAuthor = await Author.create({
            name: req.body.name,
            lastname: req.body.lastname,
        });
        res.json(newAuthor);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const updateAuthor = async (req, res) => {
    try{
        await Author.update({
            name: req.body.name,
            lastname: req.body.lastname,
        },{
            where: { id: req.params.id }
        });
        res.json(Author)
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const deleteAuthor = async (req, res) => {
    try{
        await Author.destroy({
            where: { id: req.params.id },
        });
        res.sendStatus(204);
    } catch(error){
        return res.status(500).json( { message: error.message });
    };
};