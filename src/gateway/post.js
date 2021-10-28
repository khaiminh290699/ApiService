const express = require("express");
const { Kafka } = require("../ultilities");
 
const router = express.Router();
const kafka = new Kafka();

router.post("/list", async (req, res) => {
  const { id: user_id } = req.user;
  return res.send(await kafka.rpc("post.list", user_id, { ...req.body, meta: { user: req.user } }));
})

router.post("/create", async (req, res) => {
  const { id: user_id } = req.user;
  return res.send(await kafka.rpc("post.create", user_id, { ...req.body, meta: { user: req.user } }));
})

router.post("/list-timer", async (req, res) => {
  const { id: user_id } = req.user;
  return res.send(await kafka.rpc("post.list.timer", user_id, { ...req.body, meta: { user: req.user } }));
})

router.post("/toggle", async (req, res) => {
  const { id: user_id } = req.user;
  return res.send(await kafka.rpc("post.toggle", user_id, { ...req.body, meta: { user: req.user } }));
})


module.exports = router;