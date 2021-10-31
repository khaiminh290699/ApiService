const express = require("express");
const { Kafka } = require("../ultilities");
 
const router = express.Router();
const kafka = new Kafka();

router.post("/list", async (req, res) => {
  return res.send(await kafka.rpc("web.list", null, { params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

router.post("/forums", async (req, res) => {
  return res.send(await kafka.rpc("web.forums", null, { params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

router.post("/get-community", async (req, res) => {
  const { id: user_id } = req.user;
  const responseKey = `${user_id}_${new Date().getTime()}`
  await kafka.produce("web.getCommunity", null, { params: { ...req.body, ...req.params, responseKey }, meta: { user: req.user } });
  return res.send({ status: 200, data: { responseKey } });
})

module.exports = router;