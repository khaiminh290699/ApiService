const express = require("express");
const { Kafka } = require("../ultilities");
 
const router = express.Router();
const kafka = new Kafka();

router.get("/:id", async (req, res) => {
  const { id: user_id } = req.user;
  return res.send(await kafka.rpc("post.get", user_id, { params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

router.post("/list", async (req, res) => {
  const { id: user_id } = req.user;
  return res.send(await kafka.rpc("post.list", user_id, { params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

router.post("/create", async (req, res) => {
  const { id: user_id } = req.user;
  return res.send(await kafka.rpc("post.create", user_id, { params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

router.post("/update", async (req, res) => {
  const { id: user_id } = req.user;
  return res.send(await kafka.rpc("post.update", user_id, { params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

router.post("/list-timer", async (req, res) => {
  const { id: user_id } = req.user;
  return res.send(await kafka.rpc("post.list.timer", user_id, { params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

router.post("/toggle", async (req, res) => {
  const { id: user_id } = req.user;
  return res.send(await kafka.rpc("post.toggle", user_id, { params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

router.post("/backlink/create", async (req, res) => {
  const { id: user_id } = req.user;
  return res.send(await kafka.rpc("post.backlink.create", user_id, { params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

router.post("/backlink/delete", async (req, res) => {
  const { id: user_id } = req.user;
  return res.send(await kafka.rpc("post.backlink.delete", user_id, { params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

router.post("/backlink/get", async (req, res) => {
  return res.send(await kafka.rpc("post.backlink.get", null, { params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})


module.exports = router;