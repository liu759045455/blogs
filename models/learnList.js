const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const LearnList = sequelize.define('LearnList', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,//是否允许为空
    },
    times: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    src: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    coms: {
        type: DataTypes.STRING,
        allowNull:true
    },
    read: {
        type: DataTypes.STRING,
        allowNull:false
    },
    prev: { 
        type: DataTypes.STRING,
        allowNull:true
    },
    prevId: {
        type: DataTypes.STRING,
        allowNull:true
    },
    next: {
        type: DataTypes.STRING,
        allowNull:true
    },
    nextId: {
        type: DataTypes.STRING,
        allowNull:true
    }

})

module.exports = LearnList;