const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const Contents = sequelize.define("Contents",{
    name: {
        type: DataTypes.STRING,
        allowNull: false,//是否允许为空
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,//是否允许为空
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    times: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    coms: {
        type: DataTypes.STRING,
        allowNull:true
    },
    src: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    read: {
        type: DataTypes.STRING,
        allowNull:false
    },
    pLabel: {
        type: DataTypes.TEXT("LONG"),
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

module.exports = Contents;