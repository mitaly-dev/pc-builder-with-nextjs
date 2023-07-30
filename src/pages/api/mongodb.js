import { applyMiddleware } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const { MongoClient } = require("mongodb");

const username = encodeURIComponent("<username>");
const password = encodeURIComponent("<password>");
const cluster = "<clusterName>";
const authSource = "<authSource>";
const authMechanism = "<authMechanism>";

let uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ac-i9pzkrc-shard-00-00.ojtfupc.mongodb.net:27017,ac-i9pzkrc-shard-00-01.ojtfupc.mongodb.net:27017,ac-i9pzkrc-shard-00-02.ojtfupc.mongodb.net:27017/pc-builder?ssl=true&replicaSet=atlas-wbbut3-shard-0&authSource=admin&retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function connectToDB(req, res) {
  try {
    await client.connect();
    return client;
  } finally {
  }
}
export default connectToDB;
