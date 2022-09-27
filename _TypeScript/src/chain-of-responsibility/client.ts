
import ATMDispenserChain from './atm-dispenser-chain'

const ATM = new ATMDispenserChain()
console.log('Enter amount to withdrawal : ')
process.stdin.on('data', (data: string) => {
    if (parseInt(data)) {
        const amount = parseInt(data)
        if (amount < 10 || amount % 10 != 0) {
            console.log(
                'Amount must be above 10 and multiples of 10'
            )
        } else {
            ATM.chain1.handle(amount)
            console.log('dispensed')
            process.exit()
        }
    } else {
        process.exit()
    }
})
