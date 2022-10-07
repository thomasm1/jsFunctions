interface IHandler {
    // Handler Interface that Successors will implement
    handle(payload: number):number
}
class Successor1 implements IHandler {
    handle(payload: number) {
        console.log(  `successor payload: ${payload}`) 
        const test = Math.floor(Math.random() *2) +1
        if(test === 1) {
            payload += 1
            payload = new Successor1().handle(payload)
        } else {
            payload -= 1
            payload = new Successor2().handle(payload)
        }
        return payload
    }
}

class Successor2 implements IHandler {
    handle(payload: number) {
        console.log(  `successor payload: ${payload}`) 
        const test = Math.floor(Math.random() * 3) +1
        if(test === 1) {
            payload = payload += 2
            payload = new Successor1().handle(payload)
        } else if (payload === 2) {
            payload = payload /2
            payload = new Successor2().handle(payload)
        } ///// if test = 3 then assign no further successors
        return payload
    }
}

class Chain { // chain with a default first successor
    start (payload: number) {// setting first successor that will modify payload
        return new Successor1().handle(payload)
    }
}

// Client 
const chainClient = new Chain()
const payloadClient = 1
const out = chainClient.start(payloadClient)
console.log(`final result = ${out}`)