const express = require("express");
const router = express.Router();
const LearnListServ = require("../../services/learnlistServies");
const { asyncHandler } = require("../getSendResult");

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        return LearnListServ.getLearnList(page, limit);
    })
)

router.put(
    "/:id",
    asyncHandler(async (req, res) => {
        return await LearnListServ.updateLearn(req.params.id, req.body);
    })
)


router.post(
    "/",
    asyncHandler(async (req, res) => {
        return await LearnListServ.addLearnList(req.body);
    })
)

module.exports = router;