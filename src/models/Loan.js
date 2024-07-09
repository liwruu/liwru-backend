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
    },
    returnExtensionDate: {
        type: DataTypes.DATE,
    },
    loanExtension: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        defaultValue: 'Prestado',
        allowNull: false,
    },
}, {
    timestamps: false,
    hooks: {
        beforeCreate: (loan) => {
            loan.returnDate = new Date(loan.loanDate.getDate() + 5);
        }
    }
});