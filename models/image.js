const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const Images = sequelize.define("Image", {
    src: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName: true
})

module.exports = Images;