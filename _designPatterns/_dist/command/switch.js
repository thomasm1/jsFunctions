"use strict";
// INVOKE Class
exports.__esModule = true;
var Switch = /** @class */ (function () {
    function Switch() {
        this.commands = {};
        this.history = [];
    }
    Switch.prototype.showHistory = function () {
        // PRINT HISTORY OF EACH TIME A COMMAND WAS INVOKED
        this.history.forEach(function (row) {
            console.log("".concat(row[0], " : ").concat(row[1]));
        });
    };
    Switch.prototype.register = function (commandName, command) {
        // Register commands in the invoker
        this.commands[commandName] = command;
    };
    Switch.prototype.execute = function (commandName) {
        // execute any registered commands
        if (commandName in this.commands) {
            this.commands[commandName].execute();
            this.history.push([Date.now(), commandName]);
        }
        else {
            console.log("Command [".concat(commandName, "] not recoqnized"));
        }
    };
    Switch.prototype.replayLast = function (numberOfCommands) {
        var _this = this;
        var commands = this.history.slice(this.history.length - numberOfCommands, this.history.length);
        commands.forEach(function (command) {
            _this.commands[command[1]].execute();
        });
    };
    return Switch;
}());
exports["default"] = Switch;
