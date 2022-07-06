const sequelize = require("sequelize");
const db = new sequelize("america", null, null, {
    dialect: "postgres",
    host: "localhost",
    logging: false,
})

module.exports = db;