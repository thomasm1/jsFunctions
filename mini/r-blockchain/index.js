"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const express = __importStar(require("express"));
const db_data_1 = require("./db-data");
const crypto_1 = require("crypto");
const axios_1 = __importDefault(require("axios"));
const app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let blockchain = {};
const BLOCKCHAIN_HOST = "blockchain-clusterip-srv";
const BLOCKCHAIN_PORT = 9009;
const BUS_HOST = "event-bus-srv"; // localhost
const PORT_EVENT_BUS = 4005;
// #1 //
const getBlockchain = (req, res) => {
    res.status(200).json(Object.values(blockchain));
    res.send(blockchain);
};
// #2 //
const getBlockById = (req, res) => {
    const blockId = req.params["id"];
    const blockchain = Object.values(db_data_1.BLOCKCHAIN);
    const block = blockchain.find((block) => block.id == blockId);
    res.status(200).json(block);
};
// #3 //
const BlockMinted = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, crypto_1.randomBytes)(4).toString(`hex`);
    const { title } = req.body;
    blockchain[id] = {
        id, title
    };
    yield axios_1.default.post(`http://${BUS_HOST}:${PORT_EVENT_BUS}/events`, {
        type: "BlockMinted",
        data: {
            id, title
        },
    });
    res.status(201).send(blockchain[id]);
});
app.route('/blockchain').get(getBlockchain); // #1 //
app.route(`/blockchain/:id`).get(getBlockById); // #2 // 
app.route(`/transaction`).post(BlockMinted); // #3 //
// #5
app.post(`/events`, (req, res) => {
    console.log(`Received Event`, req.body.type);
    res.send({});
});
app.listen(BLOCKCHAIN_PORT, () => {
    console.log(`⚡️[*blockchain* server]: Server is running at https://${BLOCKCHAIN_HOST}:${BLOCKCHAIN_PORT}`);
    console.log(`⚡️[event-bus]: Event Bus target: https://${BUS_HOST}:${PORT_EVENT_BUS}`);
});
