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
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    returnDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW + 5,
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