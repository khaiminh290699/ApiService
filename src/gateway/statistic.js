const express = require("express");
const { Kafka } = require("../ultilities");
 
const router = express.Router();
const kafka = new Kafka();

router.post("/in-time", async (req, res) => {
  return res.send(await kafka.rpc("statistic.getInTime", null, { params: { ...req.body, ...req.params }, meta: { user: req.user } }));
})

router.post("/get-total", async (req, res) => {
  return res.send(await kafka.rpc("statistic.getTotal", null, { params: { ...req.body, ...req.params }, meta: { user: req.user } }));

})


module.exports = router;