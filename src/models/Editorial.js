import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const editorial = sequelize.define('editorial', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
    }
})
