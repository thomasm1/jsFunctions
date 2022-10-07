"use strict";
exports.__esModule = true;
/////// SINGLETON
var reports_1 = require("./reports");
var wallets_1 = require("./wallets");
var Users = /** @class */ (function () {
    function Users() {
        this.users = {};
        this.reports = new reports_1["default"]();
        this.wallets = new wallets_1["default"]();
        if (Users.instance) {
            return Users.instance;
        }
        Users.instance = this;
    }
    Users.prototype.registerUser = function (newUser) {
        // register a user
        if (!(newUser['user_name'] in this.users)) { //unique user_id.
            // Using existing user_name as the id  
            var userId = newUser['user_name'];
            this.users[userId] = newUser;
            this.reports.logEvent("new user '".concat(userId, "' created"));
            // create a wallet for new user
            this.wallets.createWallet(userId);
            // give user a sign up airdrop
            this.reports.logEvent("Give new user '".concat(userId, "' sign up bonus of 10"));
            this.wallets.adjustBalance(userId, 10);
            return userId;
        }
        return '';
    };
    Users.prototype.editUser = function (userId, user) {
        //  Not implemented yet
        console.log(userId);
        console.log(user);
        return false;
    };
    Users.prototype.changePwd = function (userId, password) {
        //  Not implemented yet
        console.log(userId);
        console.log(password);
        return false;
    };
    return Users;
}());
exports["default"] = Users;
