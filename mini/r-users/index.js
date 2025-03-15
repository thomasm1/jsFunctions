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
const users = db_data_1.USERS; // {};
const USERS_HOST = "users-clusterip-srv"; // localhost
const USERS_PORT = 3999;
const BUS_HOST = "event-bus-srv"; // localhost
const PORT_EVENT_BUS = 4005;
// #1
const getUsers = (req, res) => {
    // res.status(200).json({ data: Object.values(users) });
    res.status(200).json(Object.values(users));
};
// #2
const getUserById = (req, res) => {
    const email = req.params["email"];
    const users = Object.values(db_data_1.USERS); // users;                   //////// REMOVE THIS LINE
    const user = users.find((user) => user.email == email);
    res.status(200).json(user);
};
// #3
const userRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, crypto_1.randomBytes)(4).toString(`hex`);
    const { email, password } = req.body;
    users[id] = {
        id
    };
    yield axios_1.default.post(`http://${BUS_HOST}:${PORT_EVENT_BUS}/events`, {
        type: "UserCreated",
        data: {
            id,
            email,
            password
        },
    });
    res.status(201).send(users[id]);
});
// #4
const userLogin = (req, res) => {
    const data = req.body;
    const users = Object.values(db_data_1.USERS); // users;
    let email = data.email;
    let password = data.password;
    let user = null;
    for (let u of users) {
        if (u.email == email && u.password == password) {
            user = u;
        }
    }
    res.status(200).json(user);
};
app.route('/users').get(getUsers); // #1
app.route('/users/email/:email').get(getUserById); // #2
app.route('/users').post(userRegister); // #3
app.route('/login').get(userLogin);
app.post(`/events`, (req, res) => {
    console.log(`Received Event`, req.body.type);
    res.send({});
});
app.listen(USERS_PORT, () => {
    console.log(`⚡️[*users* server]: Server is running at https://${USERS_HOST}:${USERS_PORT}`);
    console.log(`⚡️  Event Bus target: http://${BUS_HOST}:${PORT_EVENT_BUS}`);
});
