const redis = require("redis");
const { CACHER } = process.env;

class Redis {
  constructor() {};

  init = async () => {
    this.redis = redis.createClient(CACHER);
  }

  subscribe = async (channel) => {
    this.redis.subscribe(channel);
    return await new Promise((resolve, reject) => {
      this.redis.on("message", (channel, message) => {
        resolve(JSON.parse(message));
      });
    })
  }

  publish = async (channel, message) => {
    return await this.redis.publish(channel, JSON.stringify(message));
  }
}

module.exports = Redis;