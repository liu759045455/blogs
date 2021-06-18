const express = require("express");
const router = express.Router();
const Image = require("../../services/imageServies");
const { asyncHandler } = require("../getSendResult");


router.get(
    "/",
    asyncHandler(async (req, res) => {
        return await Image.getImageAll(req.body);
    })
)

router.post(
    "/",
    asyncHandler(async (req, res) => {
        return await Image.addImage(req.body);
    })
)

module.exports = router;