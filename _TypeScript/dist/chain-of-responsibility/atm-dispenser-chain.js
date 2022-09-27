"use strict";
exports.__esModule = true;
var dispenser10_1 = require("./dispenser10");
var dispenser20_1 = require("./dispenser20");
var dispenser50_1 = require("./dispenser50");
var ATMDispenserChain = /** @class */ (function () {
    function ATMDispenserChain() {
        this.chain1 = new dispenser50_1["default"]();
        this.chain2 = new dispenser20_1["default"]();
        this.chain3 = new dispenser10_1["default"]();
        //Default => 50's , then all recalculated dynamically at runtime
        this.chain1.nextSuccessor(this.chain2);
        this.chain2.nextSuccessor(this.chain3);
    }
    return ATMDispenserChain;
}());
exports["default"] = ATMDispenserChain;
