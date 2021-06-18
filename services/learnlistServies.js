const LearnList = require("../models/learnList");
const { Op } = require("sequelize");

exports.addLearnList = async function (obj) {
    return (await LearnList.create(obj)).toJSON();
}

exports.getLearnList = async function (page = 1, limit = 10, title = "") {
    const where = {};
    if(title) {
        where.title = {
            [Op.like]: `%${title}%`,
        }
    }
    const result = await LearnList.findAndCountAll({
        where: where,
        offset: (page - 1) * limit,
        limit: +limit
    })

    return {
        total: result.count,
        data: JSON.parse(JSON.stringify(result.rows))
    }
}

exports.updateContent = async function (id, obj) {
    return await LearnList.update(obj, {
        where: {
            id
        }
    });
}
