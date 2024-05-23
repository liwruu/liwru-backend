import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { Author } from "./Author";
import { BibliographicMaterial } from "./BibliographicMaterial";

export const AuthorMaterial = sequelize.define('authorMaterial', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
},{
    timestamps: true,
});
