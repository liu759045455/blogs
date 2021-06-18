const express = require("express");
const router = express.Router();
const ContentServ = require("../../services/contentServies");
const { asyncHandler } = require("../getSendResult");

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        return await ContentServ.getContent(page, limit);
    })
)

router.get(
    "/:id",
    asyncHandler(async (req, res) => {
        return await ContentServ.getContentById(req.params.id);
    })
)

router.get(
    "/all",
    asyncHandler(async (req, res) => {
        return await ContentServ.getContentAll(req.body)
    })
)

router.post("/",
    asyncHandler(async (req, res) => {
        return await ContentServ.addContent(req.body);
    })
)

router.put(
    "/:id",
    asyncHandler(async (req, res) => {
        return await ContentServ.updateContent(req.params.id, req.body);
    })
)


module.exports = router;