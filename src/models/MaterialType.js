import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { BibliographicMaterial } from './BibliographicMaterial.js';

export const MaterialType = sequelize.define('materialType', {
    id:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
    }
},{
    timestamps: true,
});

MaterialType.hasMany(BibliographicMaterial, {
    foreignKey: 'materialTypeId',
    sourceId: 'id',
});

BibliographicMaterial.belongsTo(MaterialType, {
    foreignKey: 'materialTypeId',
    targetID: 'id',
});