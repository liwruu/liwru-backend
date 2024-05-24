import { Author } from '../models/Author.js';

export const getAuthors = async (req, res) => {
    try{
        const authors = await Author.findAll();
        res.json(authors);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};

export const createAuthor = async (req, res) => {
    const { name, lastname } = req.body;
    try{
        const newAuthor = await Author.create({
            name,
            lastname,
        });
        res.json(newAuthor);
    } catch(error){
        return res.status(500).json( { message: error.message });
    }
};