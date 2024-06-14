import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { BibliographicMaterial } from './BibliographicMaterial.js';

export const MaterialState = sequelize.define( 'materialState', {
    id:{
        type: DataTypes.CHAR,
        primaryKey: true,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
    }
},{
    timestamps: false,
});

MaterialState.hasMany(BibliographicMaterial, {
    foreignKey: 'materialStateId',
    sourceId: 'id',
});

BibliographicMaterial.belongsTo(MaterialState, {
    foreignKey: 'materialStateId',
    targetId: 'id',
});