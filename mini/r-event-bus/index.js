const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
 
const POST_HOST = "posts-clusterip-srv"; // localhost
const PORT_POSTS = 4000;

const COMMENTS_HOST = "comments-clusterip-srv"; // localhost
const PORT_COMMENTS = 4001;

const MODERATION_HOST = "moderation-clusterip-srv"; // localhost
const PORT_MODERATION = 4003;

const BLOCKCHAIN_HOST = "blockchain-clusterip-srv";  // localhost
const PORT_BLOCKCHAIN = 9009;

const USERS_HOST = "users-clusterip-srv"; // localhost
const PORT_USERS = 3999;

const HANDLER_HOST = "event-handler-srv"; // localhost
const PORT_QUERY = 4004;

const BUS_HOST = "event-bus-srv"; // localhost
const BUS_PORT = 4005;

const events = [];

app.post(`/events`, (req, res) => {
  const event = req.body;
  events.push(event);

  axios.post(`http://${POST_HOST}:${PORT_POSTS}/events`, event).catch((err) => {
    console.log(err.message);
  });
  axios.post(`http://${COMMENTS_HOST}:${PORT_COMMENTS}/events`, event).catch((err) => {
    console.log(err.message);
  });
  axios.post(`http://${HANDLER_HOST}:${PORT_QUERY}/events`, event).catch((err) => {
    console.log(err.message);
  });
  axios.post(`http://${MODERATION_HOST}:${PORT_MODERATION}/events`, event).catch((err) => {
    console.log(err.message);
  });

  axios.post(`http://${BLOCKCHAIN_HOST}:${PORT_BLOCKCHAIN}/events`, event).catch((err) => {
    console.log(err.message);
  });
  axios.post(`http://${USERS_HOST}:${PORT_USERS}/events`, event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: "OK" });
});


app.get("/events", (req,res) => {
  res.send(events);
})

app.listen(BUS_PORT, () => {
  console.log(`⚡️[Event-Bus]: Server is running at https://${BUS_HOST}:${BUS_PORT}`); 
});
 