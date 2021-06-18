require("./Contents");
require("./image");
require("./learnList");
// require("./Note")

const sequelize = require("./db");
sequelize.sync({alter: true}).then(() => {
    console.log("所有模块同步执行")
})