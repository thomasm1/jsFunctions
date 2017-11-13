//author- tm -
class Block {
    constructor(index, timestamp, data, previousHash = ''){
this.index = index;
this.timestamp = timestamp;
this.data = data;
this.previousHash = previousHash
this.hash = this.calculateHash();
    }
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();

    }
}

class Blockchain {
    constructor() {
        this.chain = [];
    }
    createGenesisBlock(){
        return new Block(0, "11/12/17", "Genesis Block", "0");
    }
    getlatestBlock(){
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock){
        newBlock.previousHash = this.getlatestBlock();
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
tm.addBlock(new Block(2, "11/13/17", { amount: 10 }));

console.log('Is block chain valid' + tm.isChainValid)
//console.log(JSON.stringify(tm, null))
