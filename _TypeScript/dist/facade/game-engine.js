"use strict";
exports.__esModule = true;
var reports_1 = require("./reports");
var wallets_1 = require("./wallets");
var GameEngine = /** @class */ (function () {
    function GameEngine() {
        this.startTime = 0;
        this.clock = 0;
        this.entries = [];
        this.gameOpen = true;
        this.reports = new reports_1["default"]();
        this.wallets = new wallets_1["default"]();
        if (GameEngine.instance) {
            return GameEngine.instance;
        }
        this.startTime = Math.floor(Date.now() / 1000);
        this.clock = 60;
        GameEngine.instance = this;
    }
    GameEngine.prototype.getGameState = function () {
        // Get a snapshot of the current game state
        var now = Math.floor(Date.now() / 1000);
        var timeRemaining = this.startTime - now + this.clock;
        console.log('getGameState ' + timeRemaining);
        if (timeRemaining < 0) {
            timeRemaining = 0;
        }
        this.gameOpen = false;
        return {
            clock: timeRemaining,
            gameOpen: this.gameOpen,
            entries: this.entries
        };
    };
    GameEngine.prototype.submitEntry = function (userId, entry) {
        // Submit a new entry for the user in this game
        var now = Math.floor(Date.now() / 1000);
        var time_remaining = this.startTime - now + this.clock;
        if (time_remaining > 0) {
            if (this.wallets.getBalance(userId) > 1) {
                if (this.wallets.adjustBalance(userId, -1)) {
                    this.entries.push([userId, entry]);
                    this.reports.logEvent("New entry '".concat(entry, "' submitted by '").concat(userId, "'"));
                    return true;
                }
                this.reports.logEvent("Problem adjusting balance for '".concat(userId, "'"));
                return false;
            }
            this.reports.logEvent("User Balance for '".concat(userId, "' to low"));
            return false;
        }
        this.reports.logEvent('Game Closed');
        return false;
    };
    return GameEngine;
}());
exports["default"] = GameEngine;
