
class NumberWheel { // concrete iterator [iterable]

    index: number

    constructor() {
        this.index = 0
    }
    next() {
        this.index = this.index +1
        return (this.index * 2) % 11
    }
}

const NUMBERWHEEL = new NumberWheel() 

for (let i = 0; i < 22; i++) {
    process.stdout.write(NUMBERWHEEL.next() + '')
}