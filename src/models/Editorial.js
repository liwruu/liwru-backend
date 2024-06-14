import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { BibliographicMaterial } from './BibliographicMaterial.js';

export const Editorial = sequelize.define('editorial', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
    }
},{
    timestamps: false,
});

Editorial.hasMany(BibliographicMaterial, {
    foreignKey: 'editorialId',
    sourceKey: 'id',
});

BibliographicMaterial.belongsTo(Editorial, {
    foreignKey: 'editorialId',
    targetId: 'id',
});
