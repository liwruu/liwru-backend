import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';


export const BibliographicMaterial = sequelize.define('bibliographicMaterial', {
    id:{
        type: DataTypes.CHAR,
        primaryKey: true,
        allowNull: false,
    },
    title:{
        type: DataTypes.STRING,
    },
    isbn:{
        type: DataTypes.INTEGER,
    },
    pages:{
        type: DataTypes.INTEGER,
    }
},{
    timestamps: true,
});