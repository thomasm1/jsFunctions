var Successor1 = /** @class */ (function () {
    function Successor1() {
    }
    Successor1.prototype.handle = function (payload) {
        console.log("successor payload: ".concat(payload));
        var test = Math.floor(Math.random() * 2) + 1;
        if (test === 1) {
            payload += 1;
            payload = new Successor1().handle(payload);
        }
        else {
            payload -= 1;
            payload = new Successor2().handle(payload);
        }
        return payload;
    };
    return Successor1;
}());
var Successor2 = /** @class */ (function () {
    function Successor2() {
    }
    Successor2.prototype.handle = function (payload) {
        console.log("successor payload: ".concat(payload));
        var test = Math.floor(Math.random() * 3) + 1;
        if (test === 1) {
            payload = payload += 2;
            payload = new Successor1().handle(payload);
        }
        else if (payload === 2) {
            payload = payload / 2;
            payload = new Successor2().handle(payload);
        } ///// if test = 3 then assign no further successors
        return payload;
    };
    return Successor2;
}());
var Chain = /** @class */ (function () {
    function Chain() {
    }
    Chain.prototype.start = function (payload) {
        return new Successor1().handle(payload);
    };
    return Chain;
}());
// Client 
var chainClient = new Chain();
var payloadClient = 1;
var out = chainClient.start(payloadClient);
console.log("final result = ".concat(out));
