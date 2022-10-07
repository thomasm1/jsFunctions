"use strict";
exports.__esModule = true;
var Dispenser20 = /** @class */ (function () {
    function Dispenser20() {
    }
    Dispenser20.prototype.nextSuccessor = function (successor) {
        this.successor = successor;
    };
    Dispenser20.prototype.handle = function (amount) {
        if (amount >= 20) {
            var num = Math.floor(amount / 20);
            var remainder = amount % 20;
            console.log("Dispensing ".concat(num, " $20 dollars"));
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
    return Dispenser20;
}());
exports["default"] = Dispenser20;
