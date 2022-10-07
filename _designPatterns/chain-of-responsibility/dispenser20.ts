import IDispenser from './idispenser'

export default class Dispenser20 implements IDispenser {
    private successor: IDispenser | undefined

    nextSuccessor(successor: IDispenser): void {
        this.successor = successor
    }

    handle(amount: number ): void {
        if (amount >= 20) {
            const num = Math.floor(amount / 20)
            const remainder = amount % 20
            console.log(`Dispensing ${num} $20 dollars`)
            if (remainder !== 0) {
                ;(this.successor as IDispenser).handle(remainder)
            }
        } else {
            ;(this.successor as IDispenser).handle(amount)
        }
    }
}