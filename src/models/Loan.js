import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Loan = sequelize.define('Loan', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    loanDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    returnDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    loanExtension: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    state: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
},{
  timestamps: false,
});

