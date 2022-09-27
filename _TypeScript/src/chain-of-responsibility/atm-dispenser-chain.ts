import Dispenser10 from './dispenser10'
import Dispenser20 from './dispenser20'
import Dispenser50 from './dispenser50'

export default class ATMDispenserChain {
    chain1: Dispenser50
    chain2: Dispenser20
    chain3: Dispenser10

    constructor() {
        this.chain1 = new Dispenser50()
        this.chain2 = new Dispenser20()
        this.chain3 = new Dispenser10()
        //Default => 50's , then all recalculated dynamically at runtime
        this.chain1.nextSuccessor(this.chain2)
        this.chain2.nextSuccessor(this.chain3)
    }
}