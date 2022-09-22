"use strict";
exports.__esModule = true;
///////// Reports
var reports_1 = require("./reports");
var Wallets = /** @class */ (function () {
    function Wallets() {
        this.wallets = {};
        this.reports = new reports_1["default"]();
        if (Wallets.instance) {
            return Wallets.instance;
        }
        Wallets.instance = this;
    }
    Wallets.prototype.createWallet = function (userId) {
        // A method to initialize a users wallet
        if (!(userId in this.wallets)) {
            this.wallets[userId] = 0;
            this.reports.logEvent("wallet for '".concat(userId, "' created and set to 0"));
            return true;
        }
        return false;
    };
    Wallets.prototype.getBalance = function (userId) {
        // A method to check users balance
        this.reports.logEvent("Balance check for '".concat(userId, "' = ").concat(this.wallets[userId]));
        return this.wallets[userId];
    };
    Wallets.prototype.adjustBalance = function (userId, amount) {
        // A method to adjust a user balance up or down
        this.wallets[userId] = this.wallets[userId] + amount;
        this.reports.logEvent("Balance adjustment for '".concat(userId, "'. New balance = ").concat(this.wallets[userId]));
        return this.wallets[userId];
    };
    return Wallets;
}());
exports["default"] = Wallets;
