import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Author } from './Author.js';
import { BibliographicMaterial } from './BibliographicMaterial.js';

export const AuthorMaterial = sequelize.define('authorMaterial', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
},{
    timestamps: false,
});

Author.belongsToMany(BibliographicMaterial, { through: AuthorMaterial });
BibliographicMaterial.belongsToMany(Author, { through: AuthorMaterial });