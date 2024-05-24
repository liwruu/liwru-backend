import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";
import { Loan } from "./Loan.js";

export const User = sequelize.define('User', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastnmae: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "USER",
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Active",
    },
});

User.hasMay(Loan, {
  foreignKey: 'userId',
  sourceKey: 'id',
});

Loan.belongsTo(User, {
  foreignKey: 'userId',
  targetId: 'id',
})