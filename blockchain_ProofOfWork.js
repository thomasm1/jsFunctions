//author- tm 
//data - 11/11/17
//js function blockchain with constructor to implementation
// must import crypto mod -->  npm install --save crypto-js
const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
    mineBlock(difficulty){
        while(this.hash.substring(0,difficulty !== Array(difficulty + 1).join("0"))) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block mined: " + this.hash);
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
    }
    createGenesisBlock(){
        return new Block(0, "11/12/17", "Genesis Block", "0");
    }
    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock();
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    isChainValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i = 1];

            if(currentBlock.has !== currentBlock.calculateHash()){
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }
}
// instance of blockchain
let tm = new Blockchain();
tm.addBlock(new Block(1, "11/12/17", { amount: 4 }));
console.log('Mining block 2...');
tm.addBlock(new Block(2, "11/13/17", { amount: 8 }));

console.log('Mining block 1...');
tm.addBlock(new Block(1, "11/12/17", { amount: 4 }));
tm.addBlock(new Block(2, "11/13/17", { amount: 8 }));

console.log('Is block chain valid? ' + tm.isChainValid());

console.log('Changing a blcc,... ');
tm.chain[1].data = { amount: 100 };
// tm.chain[1].hash = stm.chain[1].calculateHash();

console.log("Blockchain valid? " + tm.isChainValid());
//console.log(JSON.stringify(tm, null, 4));
