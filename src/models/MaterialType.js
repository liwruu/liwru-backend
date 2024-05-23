import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

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
