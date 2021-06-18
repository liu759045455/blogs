const Content = require("../models/Contents");
const { Op } = require("sequelize");

exports.addContent = async function(obj) {
    return( await Content.create(obj)).toJSON();
}

exports.getContentAll = async function () {
    const result = await Content.findAll();
    return JSON.parse(JSON.stringify(result));
}

exports.getContent = async function (page = 1, limit = 10, title = "") {
    const where = {};
    if(title) {
        where.title = {
            [Op.like]: `%${title}%`,
        }
    }
    const result = await Content.findAndCountAll({
        where: where,
        offset: (page - 1) * 10,
        limit: +limit
    })
    return {
        total: result.count,
        data: JSON.parse(JSON.stringify(result.rows))
    }
}

exports.getContentById = async function (id) {
    const result = await Content.findByPk(id);
    if(result) {
        return result.toJSON();
    }
    return null;
}


exports.updateContent = async function (id, obj) {
    return await Content.update(obj, {
        where: {
            id
        }
    });
}