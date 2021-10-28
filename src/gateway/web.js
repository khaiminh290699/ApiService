const express = require("express");
const { Kafka } = require("../ultilities");
 
const router = express.Router();
const kafka = new Kafka();

router.post("/list", async (req, res) => {
  return res.send(await kafka.rpc("web.list", null, req.body));
})

router.post("/forums", async (req, res) => {
  return res.send(await kafka.rpc("web.forums", null, req.body));
})

router.post("/get-community", async (req, res) => {
  const { id: user_id } = req.user;
  const responseKey = `${user_id}_${new Date().getTime()}`
  await kafka.produce("web.getCommunity", null, { ...req.body, responseKey, meta: { user: req.user } });
  return res.send({ status: 200, data: { responseKey } });
})

module.exports = router;