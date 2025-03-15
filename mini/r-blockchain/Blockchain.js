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
Object.defineProperty(exports, "__esModule", { value: true });
const sha256 = __importStar(require("sha256"));
const currentNodeUrl = process.argv[3];
//"nodemon --watch dev -e js dev/networkNode.js 9001 http://localhost:9001"
const uuid_1 = require("uuid");
class Blockchain {
    constructor() {
        this.chain = [];
        this.pendingTransactions = [];
        this.currentNodeUrl = currentNodeUrl;
        this.networkNodes = [];
        this.createNewBlock(100, '0', '0');
    }
    createNewBlock(nonce, previousBlockHash, hash) {
        const newBlock = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.pendingTransactions,
            nonce: nonce,
            hash: hash,
            previousBlockHash: previousBlockHash
        };
        this.pendingTransactions = [];
        this.chain.push(newBlock);
        return newBlock;
    }
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }
    createNewTransaction(amount, sender, recipient) {
        const newTransaction = {
            amount: amount,
            sender: sender,
            recipient: recipient,
            transactionId: (0, uuid_1.v1)()
        };
        return newTransaction;
    }
    addTransactionToPendingTransactions(transactionObj) {
        this.pendingTransactions.push(transactionObj);
        return this.getLastBlock().index + 1;
    }
    hashBlock(previousBlockHash, currentBlockData, nonce) {
        const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
        const hash = sha256(dataAsString);
        return hash;
    }
    proofOfWork(previousBlockHash, currentBlockData) {
        let nonce = 0;
        let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        while (hash.substring(0, 4) !== '0000') {
            nonce++;
            hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        }
        return nonce;
    }
    chainIsValid(blockchain) {
        let validChain = true;
        for (let i = 1; i < blockchain.length; i++) {
            const currentBlock = blockchain[i];
            const prevBlock = blockchain[i - 1];
            const blockHash = this.hashBlock(prevBlock.hash, { transactions: currentBlock.transactions, index: currentBlock.index }, currentBlock.nonce);
            if (blockHash.substring(0, 4) !== '0000')
                validChain = false;
            if (currentBlock.previousBlockHash !== prevBlock.hash)
                validChain = false;
        }
        const genesisBlock = blockchain[0];
        const correctNonce = genesisBlock.nonce === 100;
        const correctPreviousBlockHash = genesisBlock.previousBlockHash === '0';
        const correctHash = genesisBlock.hash === '0';
        const correctTransactions = genesisBlock.transactions.length === 0;
        if (!correctNonce || !correctPreviousBlockHash || !correctHash || !correctTransactions)
            validChain = false;
        return validChain;
    }
    getBlock(blockHash) {
        let correctBlock = null;
        this.chain.forEach(block => {
            if (block.hash === blockHash)
                correctBlock = block;
        });
        return correctBlock;
    }
    getTransaction(transactionId) {
        let correctTransaction = null;
        let correctBlock = null;
        this.chain.forEach(block => {
            block.transactions.forEach(transaction => {
                if (transaction.transactionId === transactionId) {
                    correctTransaction = transaction;
                    correctBlock = block;
                }
            });
        });
        return {
            transaction: correctTransaction,
            block: correctBlock
        };
    }
    getAddressData(address) {
        const addressTransactions = [];
        this.chain.forEach(block => {
            block.transactions.forEach(transaction => {
                if (transaction.sender === address || transaction.recipient === address) {
                    addressTransactions.push(transaction);
                }
            });
        });
        let balance = 0;
        addressTransactions.forEach(transaction => {
            if (transaction.recipient === address)
                balance += transaction.amount;
            else if (transaction.sender === address)
                balance -= transaction.amount;
        });
        return {
            addressTransactions: addressTransactions,
            addressBalance: balance
        };
    }
}
exports.default = Blockchain;
