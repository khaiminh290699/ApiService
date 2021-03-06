const { Rabbitmq } = require("../ultilities");
const moment = require("moment");

const rabbitmq = new Rabbitmq();

const cron = require("node-cron");
cron.schedule("0 * * * * *", async () => {
  await rabbitmq.produce({ timer_at: moment().startOf("minute").format("HH:mm") }, { exchange: "background", queue: "timer_posting" });
  console.log("Running task timer posting")
}, {
  scheduled: true
}).start();

module.exports = cron;
