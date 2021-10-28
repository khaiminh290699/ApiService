const express = require("express");

const auth = require("./auth");
const web = require("./web")
const post = require("./post")
const account = require("./account")
const search = require("./search")
const file = require("./file")
const progressing = require("./progressing");

const router = express.Router();

router.use("/auth", auth);
router.use("/web", web);
router.use("/post", post);
router.use("/account", account);
router.use("/search", search);
router.use("/file", file);
router.use("/progressing", progressing);

module.exports = router;
