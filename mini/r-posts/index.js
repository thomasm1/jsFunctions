"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_data_1 = require("./db-data");
const crypto_1 = require("crypto");
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// app.use(cors({ origin: true }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
let posts = db_data_1.POSTS;
const POST_HOST = "posts-clusterip-srv"; // localhost
const POST_PORT = 4000;
const BUS_HOST = "event-bus-srv"; // localhost
const PORT_EVENT_BUS = 4005;
// #1 //
const getPosts = (req, res) => {
    res.status(200).json(Object.values(posts));
    res.send(posts);
};
// #2 //
const getPostById = (req, res) => {
    const postId = req.params["id"];
    const posts = Object.values(db_data_1.POSTS); //////// REMOVE THIS LINE
    const post = posts.find((post) => post.id == postId);
    res.status(200).json(post);
};
// #3 //
const PostCreated = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, crypto_1.randomBytes)(4).toString(`hex`);
    const { title } = req.body;
    posts[id] = {
        id, title
    };
    yield axios_1.default.post(`http://${BUS_HOST}:${PORT_EVENT_BUS}/events`, {
        type: "PostCreated",
        data: {
            id, title
        },
    });
    res.status(201).send(posts[id]);
});
app.route('/posts').get(getPosts); // #1 //
app.route(`/posts/:id`).get(getPostById); // #2 // 
app.route(`/posts/create`).post(PostCreated); // #3 //
// #5
app.post(`/events`, (req, res) => {
    console.log(`Received Event`, req.body.type);
    res.send({});
});
app.listen(POST_PORT, () => {
    console.log(`⚡️[*posts* server]: Server is running at http://${POST_HOST}:${POST_PORT}`);
    console.log(`⚡️  Event Bus target: http://${BUS_HOST}:${PORT_EVENT_BUS}`);
});
