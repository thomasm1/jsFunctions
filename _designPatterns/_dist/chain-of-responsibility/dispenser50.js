"use strict";
exports.__esModule = true;
var Dispenser50 = /** @class */ (function () {
    function Dispenser50() {
    }
    Dispenser50.prototype.nextSuccessor = function (successor) {
        this.successor = successor;
    };
    Dispenser50.prototype.handle = function (amount) {
        if (amount >= 50) {
            var num = Math.floor(amount / 50);
            var remainder = amount % 50;
            console.log("Dispensing ".concat(num, " $50 dollars"));
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
    return Dispenser50;
}());
exports["default"] = Dispenser50;
