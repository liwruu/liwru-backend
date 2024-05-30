import Sequilize from 'sequelize';
const { db } = require('./config.js');

export const sequelize = new Sequilize(db.database, db.user, db.password, {
    host: db.host,
    dialect: db.dialect,
});