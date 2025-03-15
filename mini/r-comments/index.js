const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {}; 
const COMMENTS_HOST = "comments-clusterip-srv"; // localhost
const COMMENTS_PORT = 4001; 

const BUS_HOST = "event-bus-srv"; // localhost
const PORT_EVENT_BUS = 4005;

app.get(`/posts/:id/comments`, (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post(`/posts/:id/comments`, async (req, res) => {
  const commentId = randomBytes(4).toString(`hex`);
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content, status: "pending" });

  commentsByPostId[req.params.id] = comments;

  await axios.post(`http://${BUS_HOST}:${PORT_EVENT_BUS}/events`, {
    type: `CommentCreated`,
    data: {
      id: commentId,
      content,
      postId: req.params.id,
      status:"pending"
    },
  });

  res.status(201).send(comments);
});



///////////////////
app.post(`/events`, async (req, res) => {
  console.log(`Event Received`, req.body.type);

  const  { type, data } = req.body;
  
  if (type=== "CommentModerated") {
    const { postId, id, status, content } = data;
    const comments = commentsByPostId[postId];
    const comment = comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;

    await axios.post(`http://${BUS_HOST}:${PORT_EVENT_BUS}/events`, {
      type: "CommentUpdated",
      data: {
        id,
        status,
        postId,
        content,
      },
    });
  }
  res.send({});
});
 

app.listen(COMMENTS_PORT, () => {
  console.log(`⚡️[comments server]: Server is running at https://${COMMENTS_HOST}:${COMMENTS_PORT}`);
  console.log(`⚡️ Event Bus target: https://${BUS_HOST}:${PORT_EVENT_BUS}`);
});