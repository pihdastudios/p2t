const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");

/* use the Cosmos DB connection string you copied ealier and replace in the `url` variable */
const url = "mongodb://p2t-db:WOKPvBUZ6xBWF7sUNdhwhylKtmnBTCDzhanUTE4Zmx52sgAEQ918KVpnLnyoW6HtUQLogNM0OTIcmwspHO5PnQ%3D%3D@p2t-db.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@p2t-db@"

module.exports = async function (context, req) {
  await client.connect();
  const database = client.db("crud");
  const collection = database.collection("students");
  let data = {...req.body };
  let query = {_id:req.params.id}
  let newValues ={$set:data}
 let update = await collection.findOneAndUpdate(query,newValues,{returnOriginal:false})

  if (!update) {
    return (context.res = {
      status: 400,
      body: "found",
    });
  }
context.log(update)
  return (context.res = {
    status: 200,
    body: update.value
  });
};