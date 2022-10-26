var { describe, it } = require("jasmine"); 
var fs = require('fs');
var path = require('path');

var LocalDB =  (function () {
    function LocalDB() {
        if (LocalDB.instance) {
            return LocalDB.instance;
        }
        LocalDB.instance = this;
        console.log("initializing db");
        this.capitals = {};
        var lines = fs.readFileSync(path.join(__dirname, 'data.txt')).toString().split('\r\n');
        for (var i = 0; i < lines.length / 2; ++i) {
            this.capitals[lines[2 * i]] = parseInt(lines[2 * i + 1]);
        }
        console.log(this.capitals);
    }
    LocalDB.prototype.getPopulation = function (city) {
        return this.capitals[city];
    };
    return LocalDB;
}());
var local = new LocalDB;
local.getPopulation("Tokyo");


class SingletonRecordFinder{
    totalPopulation(cities) {
        return cities.map(
            city => new LocalDB().getPopulation(city)).reduce((agg,comb) => agg+comb) 
    }
}
let record = new SingletonRecordFinder();
let cities = ['Pittsburgh', 'Albuquerque'];
let pop = record.totalPopulation(cities);
console.log(pop);
 
describe('population database', function() {
    it('is a singlteon', function() {
        const db1 = new LocalDB();
        const db2 = new LocalDB();
        expect(db1).toBe(db2);
    });
    it('calculates total population', function() {
       let record = new SingletonRecordFinder();
       let cities = ['Pittsburgh', 'Albuquerque'];
       let pop = record.totalPopulation(cities);
       expect(pop).toEqual(301286  + 560447)
    });
    
})

