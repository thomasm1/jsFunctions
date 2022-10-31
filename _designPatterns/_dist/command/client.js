"use strict";
exports.__esModule = true;
var light_1 = require("./light");
var switch_1 = require("./switch");
var switch_on_command_1 = require("./switch-on-command");
var switch_off_command_1 = require("./switch-off-command");
// Create a receiver
var LIGHT = new light_1["default"]();
// Create Commands
var SWITCH_ON = new switch_on_command_1["default"](LIGHT);
var SWITCH_OFF = new switch_off_command_1["default"](LIGHT);
// Register the commands with the invoker
var SWITCH = new switch_1["default"]();
SWITCH.register('ON', SWITCH_ON);
SWITCH.register('OFF', SWITCH_OFF);
// Execute the commands that are registered on the Invoker
SWITCH.execute('ON');
SWITCH.execute('OFF');
SWITCH.execute('ON');
SWITCH.execute('OFF');
// show history
SWITCH.showHistory();
// replay last two executed commands
SWITCH.replayLast(2);
