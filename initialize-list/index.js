const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
/* use the Cosmos DB connection string you copied ealier and replace in the `url` variable */
const url = "mongodb://p2t-db:WOKPvBUZ6xBWF7sUNdhwhylKtmnBTCDzhanUTE4Zmx52sgAEQ918KVpnLnyoW6HtUQLogNM0OTIcmwspHO5PnQ%3D%3D@p2t-db.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@p2t-db@"
const client = new MongoClient(url);

let defaultList = [
  {
    _id: uuidv4(),
    name: "Vincent Collin",
    niu: "4000000",
  },
  {
    _id: uuidv4(),
    name: "Ahmad Nilloc",
    niu: "4000001",
  },
  {
    _id: uuidv4(),
    name: "Tnecniv Nilloc",
    niu: "4000002",
  },
];

module.exports = async function (context, req) {
  await client.connect();
  const database = client.db("crud");
  const collection = database.collection("students");
  await collection.deleteMany({});
  await collection.insertMany(defaultList);

  return (context.res = {
    status: 200,
    body: "Initialization successful",
  });
};