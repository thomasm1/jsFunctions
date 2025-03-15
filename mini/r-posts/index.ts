import express from 'express';
import { Application,  Request, Response } from 'express';
import { POSTS } from "./db-data";
import {randomBytes} from 'crypto';  
import axios  from 'axios';
import cors from 'cors'; 
 

const app: Application = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

interface Post {
  id: string;
  title: string;
}

let posts: { [key: string]: Post } = POSTS;
 

const POST_HOST = "posts-clusterip-srv"; // localhost
const POST_PORT = 4000; 

const BUS_HOST = "event-bus-srv"; // localhost
const PORT_EVENT_BUS = 4005;

// #1 //
const getPosts = (req: Request, res: Response) => {
  res.status(200).json(Object.values(posts) );
  res.send(posts);
};


 // #2 //
 const getPostById = (req: Request, res: Response) => {

  const postId = req.params["id"];
  const posts: any = Object.values(POSTS);                      //////// REMOVE THIS LINE
  const post = posts.find((post: { id: string; }) => post.id == postId);

  res.status(200).json(post);
}  


// #3 //
 const PostCreated = async (req: Request, res: Response) => {
  const id = randomBytes(4).toString(`hex`);
  const { title } = req.body;

  posts[id] = {
    id, title
  };

  await axios.post(`http://${BUS_HOST}:${PORT_EVENT_BUS}/events`, {
    type: "PostCreated",
    data: {
      id, title
    },
  });

  res.status(201).send(posts[id]);
};


app.route('/posts').get(getPosts);  // #1 //
app.route(`/posts/:id`).get(getPostById); // #2 // 
app.route(`/posts/create`).post(PostCreated); // #3 //


// #5
app.post(`/events`,(req: Request, res: Response) => {
  console.log(`Received Event`, req.body.type);

  res.send({});
});

app.listen(POST_PORT, () => {
  console.log(`⚡️[*posts* server]: Server is running at http://${POST_HOST}:${POST_PORT}`);
  console.log(`⚡️  Event Bus target: http://${BUS_HOST}:${PORT_EVENT_BUS}`);
});
