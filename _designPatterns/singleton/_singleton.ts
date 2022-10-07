export class Singleton {
    static instance: Singleton
    id: number

    constructor(id: number) {
        this.id = id
        if (Singleton.instance) {
            return Singleton.instance
        }
        Singleton.instance = this
    }
}

const OBJ1 = new Singleton(1)
const OBJ2 = new Singleton(2)

console.log(OBJ1 === OBJ2)
console.log(OBJ1.id)
console.log(OBJ2.id)