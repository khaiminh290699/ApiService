const express = require("express");
const { Kafka } = require("../ultilities");
 
const router = express.Router();
const kafka = new Kafka();

router.post("/list", async (req, res) => {
  const { id: user_id } = req.user;
  return res.send(await kafka.rpc("account.list", user_id, { params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

router.post("/upsert", async (req, res) => {
  const { id: user_id } = req.user;
  return res.send(await kafka.rpc("account.upsert", user_id, { params: { ...req.body, ...req.params }, meta: { user: req.user }  }));
})

router.post("/toogle", async (req, res) => {
  const { id: user_id  } = req.user;
  return res.send(await kafka.rpc("account.toogle", user_id, { params: { ...req.body, ...req.params }, meta: { user: req.user }  }));
})

module.exports = router;