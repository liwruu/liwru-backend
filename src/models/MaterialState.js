import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

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
    timestamps: true,
});