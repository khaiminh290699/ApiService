const express = require("express");

require("./src/cron");
const gateway = require("./src/gateway");
const middlewares = require("./src/middlewares");

const { Kafka } = require("./src/ultilities");
const { DB } = require("./src/db");

const app = express();
app.use("/public",express.static("./public"))

app.use(...middlewares);

app.use(gateway);


app.listen(process.env.PORT || 8080, async () => {
  const db = await new DB()
  await db.DB.migrate.latest();
  await new Kafka().setup();
  console.log(`Server is running on port ${process.env.PORT || 8080}`);
})