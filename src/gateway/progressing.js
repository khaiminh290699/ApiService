const express = require("express");
const { Kafka } = require("../ultilities");
 
const router = express.Router();
const kafka = new Kafka();

router.get("/:id", async (req, res) => {
  return res.send(await kafka.rpc("post.progressing.get", null, { ...req.body, ...req.params, meta: { user: req.user } }));
})

router.post("/re-progress", async (req, res) => {
  return res.send(await kafka.rpc("post.progressing.reprogress", null, { ...req.body, meta: { user: req.user } }));
})

module.exports = router;