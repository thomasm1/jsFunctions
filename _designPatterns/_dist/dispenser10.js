"use strict";
exports.__esModule = true;
var Dispenser10 = /** @class */ (function () {
    function Dispenser10() {
    }
    Dispenser10.prototype.nextSuccessor = function (successor) {
        this.successor = successor;
    };
    Dispenser10.prototype.handle = function (amount) {
        if (amount >= 10) {
            var num = Math.floor(amount / 10);
            var remainder = amount % 10;
            console.log("Dispensing ".concat(num, " dollars"));
            if (remainder !== 0) {
                ;
                this.successor.handle(remainder);
            }
        }
        else {
            ;
            this.successor.handle(amount);
        }
    };
    return Dispenser10;
}());
exports["default"] = Dispenser10;
