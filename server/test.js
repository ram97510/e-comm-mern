const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://ram97510:conceps@conceps.tgw47ij.mongodb.net/?appName=conceps";

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected");
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

run();