"use strict";
// Light, i.e. The Receiver
exports.__esModule = true;
var Light = /** @class */ (function () {
    function Light() {
    }
    Light.prototype.turnOn = function () {
        // set of instructions to run
        console.log('Light turned ON');
    };
    Light.prototype.turnOff = function () {
        console.log('Light turned OFF');
    };
    return Light;
}());
exports["default"] = Light;
