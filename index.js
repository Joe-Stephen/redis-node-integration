require("dotenv").config();
const redis = require("redis");

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

async function executeCommands() {
  client.set("Best football player", "Lionel Messi", (err, reply) => {
    if (err) {
      console.error("Error setting data:", err);
    } else {
      console.log("Set data:", reply);
    }
  });

  client.get("Runtime", (err, reply) => {
    if (err) {
      console.error("Error getting data:", err);
    } else {
      console.log("The data got:", reply);
    }
  });
}

(async () => {
  try {
    await client.connect();
    console.log('Connected to Redis');
  } catch (err) {
    console.error(`Error connecting to Redis: ${err}`);
  }
})();

client.on("ready", () => {
  console.log("Redis instance is ready.");
  executeCommands();
});

client.on("error", (err) => {
  console.log("Error in the Connection:", err);
});
