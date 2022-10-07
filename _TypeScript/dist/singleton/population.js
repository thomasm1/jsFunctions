var fs = require('fs');
var path = require('path');
var LocalDB = /** @class */ (function () {
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
var l = new LocalDB;
l.getPopulation("Tokyo");
