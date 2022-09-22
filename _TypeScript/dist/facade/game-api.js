"use strict";
exports.__esModule = true;
var reports_1 = require("./reports");
var wallets_1 = require("./wallets");
var users_1 = require("./users");
var game_engine_1 = require("./game-engine");
var GameAPI = /** @class */ (function () {
    function GameAPI() {
        this.wallets = new wallets_1["default"]();
        this.reports = new reports_1["default"]();
        this.users = new users_1["default"]();
        this.gameEngine = new game_engine_1["default"]();
    }
    GameAPI.prototype.getBalance = function (userId) {
        // Get a players balance
        return this.wallets.getBalance(userId);
    };
    GameAPI.prototype.gameState = function () {
        // Get the current game state
        return this.gameEngine.getGameState();
    };
    GameAPI.prototype.getHistory = function () {
        // get the game history
        return this.reports.getHistory();
    };
    GameAPI.prototype.changePwd = function (userId, password) {
        // change users password
        return this.users.changePwd(userId, password);
    };
    GameAPI.prototype.submitEntry = function (userId, entry) {
        // submit a bet
        return this.gameEngine.submitEntry(userId, entry);
    };
    GameAPI.prototype.registerUser = function (value) {
        // register a new user and returns the new id
        return this.users.registerUser(value);
    };
    return GameAPI;
}());
exports["default"] = GameAPI;
