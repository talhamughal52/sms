const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017";
const client = new MongoClient(url);
let database_name = "SMS";

async function getData() {
  let result = await client.connect();
  let database = result.db(database_name);
  return database;
}
module.exports = getData;
