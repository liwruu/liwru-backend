import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { BibliographicMaterial } from './BibliographicMaterial.js'; 

export const Format = sequelize.define('format', {
    id:{
        type: DataTypes.CHAR,
        primaryKey: true,
        allowNull: false,
    },  
    description:{
        type: DataTypes.STRING,
    }
},{
    timestamps: true,
});

Format.hasMany(BibliographicMaterial, {
    foreignKey: 'formatId',
    sourceId: 'id',
});

BibliographicMaterial.belongsTo(Format, {
    foreignKey: 'formatId',
    targetId: 'id',
});