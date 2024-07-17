import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Loan } from "./Loan.js";

export const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      validate: {
        isInt: true,
        notNull: true,
        len: 7,
      }
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        notEmpty: true,
        len: [1, 10],
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: [1, 50],
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: [1, 50],
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "El correo no puede estar vacio."},
        notNull: { msg: "El correo no puede ser nulo."},
        isEmail: { msg: "Porfavor introduzca una dirección de correo valida."},
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "The password can't be null." },
        notEmpty: { msg: "The password can't be empty." },
        is: {
          args: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          msg: "Password must contain at least 8 characters, one lowercase letter, one uppercase letter, and one number.",
        },
      },
    },
    rol: {
      type: DataTypes.ENUM("USER", "ADMIN"),
      allowNull: false,
      defaultValue: "USER",
    },
    state: {
      type: DataTypes.ENUM("Active", "Inactive"),
      allowNull: false,
      defaultValue: "Active",
    },
},{
  timestamps: false,
});

User.hasMany(Loan, {
  foreignKey: 'userId',
  sourceKey: 'id',
});

Loan.belongsTo(User, {
  foreignKey: 'userId',
  targetId: 'id',
});