import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";


export const Loan = sequelize.define('Loan', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    loanDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    loanExtension: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    status: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
});