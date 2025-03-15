const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());


const commentsByPostId = {}; 
const MODERATION_HOST = "moderation-clusterip-srv"; // localhost
const MODERATION_PORT = 4003; 
const BUS_HOST = "event-bus-srv"; // localhost
const PORT_EVENT_BUS = 4005;


app.post(`/events`, async (req, res) => {
  const { type, data } = req.body;

  if (type === `CommentCreated`) {
    const status = data.content.includes(`orange`) ? `rejected` : `approved`;

    await axios.post(`http://${BUS_HOST}:${PORT_EVENT_BUS}/events`, {
      type: `CommentModerated`,
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content
      }
    });
  }

  res.send({});
});


app.listen(MODERATION_PORT, () => {
  console.log(`⚡️[moderation server]: Server is running at http://${MODERATION_HOST}:${MODERATION_PORT}`);
  console.log(`⚡️ Event Bus target: http://${BUS_HOST}:${PORT_EVENT_BUS}`);
});
 