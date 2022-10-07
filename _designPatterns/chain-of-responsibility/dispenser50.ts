import IDispenser from './idispenser'

export default class Dispenser50 implements IDispenser {
    private successor: IDispenser | undefined

    nextSuccessor(successor: IDispenser): void {
        this.successor = successor
    }

    handle(amount: number ): void {
        if (amount >= 50) {
            const num = Math.floor(amount / 50)
            const remainder = amount % 50
            console.log(`Dispensing ${num} $50 dollars`)
            if (remainder !== 0) {
                ;(this.successor as IDispenser).handle(remainder)
            }
        } else {
            ;(this.successor as IDispenser).handle(amount)
        }
    }
}