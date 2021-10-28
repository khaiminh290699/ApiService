const express = require("express");
const { Kafka } = require("../ultilities");
 
const router = express.Router();
const kafka = new Kafka();

router.post("/log-in", async (req, res) => {
  return res.send(await kafka.rpc("auth.logIn", null, req.body));
})

router.post("/sign-in", async (req, res) => {
  const { id: uer_id } = req.user;
  return res.send(await kafka.rpc("account.signIn", uer_id, { ...req.body, uer_id }));
})

router.post("/get-info", async (req, res) => {
  return res.send({ status: 200, data: { user: req.user } });
})
module.exports = router;