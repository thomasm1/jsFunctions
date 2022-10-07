"use strict";
exports.__esModule = true;
var atm_dispenser_chain_1 = require("./atm-dispenser-chain");
var ATM = new atm_dispenser_chain_1["default"]();
console.log('Enter amount to withdrawal : ');
process.stdin.on('data', function (data) {
    if (parseInt(data)) {
        var amount = parseInt(data);
        if (amount < 10 || amount % 10 != 0) {
            console.log('Amount must be above 10 and multiples of 10');
        }
        else {
            ATM.chain1.handle(amount);
            console.log('dispensed');
            process.exit();
        }
    }
    else {
        process.exit();
    }
});
