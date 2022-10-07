const fs = require('fs')
const path = require('path')

class LocalDB {
    static instance: LocalDB
    capitals:any
    constructor() {

        if (LocalDB.instance) {
            return LocalDB.instance
        }
        LocalDB.instance = this
        console.log(`initializing db`)
        this.capitals = {}
    

        let lines = fs.readFileSync(
            path.join(__dirname, 'data.txt')
        ).toString().split('\r\n')

        for (let i = 0; i < lines.length / 2; ++i) {
            this.capitals[lines[2 * i]] = parseInt(lines[2 * i + 1])
        }
        console.log(this.capitals)
    }

    getPopulation(city:string) {
        return this.capitals[city]
    } 
 
}
const l = new LocalDB
l.getPopulation("Tokyo")