import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Author = sequelize.define('author', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname:{
        type: DataTypes.STRING,
    }
},{
    timestamps: false,
});