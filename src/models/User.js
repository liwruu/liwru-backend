import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
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
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, 
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
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Active",
    },
});

User.hasMany(Loan, {
  foreignKey: 'userId',
  sourceKey: 'id',
});

Loan.belongsTo(User, {
  foreignKey: 'userId',
  targetId: 'id',
})