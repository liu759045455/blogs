const Image = require("../models/image");


exports.addImage = async function (obj) {
    return (await (await Image.create(obj)).toJSON());
}

exports.getImageAll = async function () {
    const result = await Image.findAll();
    return JSON.parse(JSON.stringify(result));
}