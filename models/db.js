const { Sequelize } = require('sequelize');
const { blogLogger } = require("../logger");
const sequelize = new Sequelize('vueblog', 'root', '123123', {
    host: 'localhost',
    dialect: 'mysql',
    logging: (msg) => {
        blogLogger.debug(msg);
    }
});

module.exports = sequelize;