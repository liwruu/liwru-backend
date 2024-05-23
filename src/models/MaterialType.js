import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const MaterialType = sequelize.define('materialtype', {
    id:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
    }
})
