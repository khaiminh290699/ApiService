const express = require("express");
const { Kafka } = require("../ultilities");
 
const router = express.Router();
const kafka = new Kafka();

router.post("/log-in", async (req, res) => {
  return res.send(await kafka.rpc("auth.logIn", null, { params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

router.post("/sign-in", async (req, res) => {
  const { id: uesr_id } = req.user;
  return res.send(await kafka.rpc("auth.signIn", uesr_id, { params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

router.post("/users", async (req, res) => {
  return res.send(await kafka.rpc("auth.user.list", null,{ params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

router.post("/get-info", async (req, res) => {
  return res.send({ status: 200, data: { user: req.user } });
})

router.post("/reset-password", async (req, res) => {
  return res.send(await kafka.rpc("auth.reset", null,{ params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

router.post("/set-permission", async (req, res) => {
  return res.send(await kafka.rpc("auth.permission", null,{ params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

router.post("/toggle-activate", async (req, res) => {
  return res.send(await kafka.rpc("auth.toggle", null,{ params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

module.exports = router;