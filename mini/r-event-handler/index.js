const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());
 
const posts = {};
const HANDLER_HOST = "query-srv"; // localhost
const HANDLER_PORT = 4004; 

const BUS_HOST = "event-bus-srv"; // localhost
const PORT_EVENT_BUS = 4005;

const handleEvent = (type, data) => { 

  if (type === 'PostCreated') {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId } = data;

    const post = posts[postId];
    post.comments.push({ id, content });
  }

  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });

    comment.status = status;
    comment.content = content;
  } 

}
app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;
  handleEvent(type, data);
  res.send({});
});

 
app.listen(HANDLER_PORT, async () => { 
  console.log(`⚡️[Event-Handler server]: is running at https://${HANDLER_HOST}:${HANDLER_PORT}`);
  console.log(`⚡️  Event Bus target: https://${BUS_HOST}:${PORT_EVENT_BUS}`);
  try {
    const res = await axios.get(`http://${BUS_HOST}:${PORT_EVENT_BUS}/events`);

    for (let event of res.data) {
      console.log("Processing event:", event.type);

      handleEvent(event.type, event.data);
    }
  } catch (error) {
    console.log(error.message);
  }
});