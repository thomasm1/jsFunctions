"use strict";
exports.__esModule = true;
var SwitchOnCommand = /** @class */ (function () {
    function SwitchOnCommand(light) {
        this.light = light;
    }
    SwitchOnCommand.prototype.execute = function () {
        this.light.turnOn();
    };
    return SwitchOnCommand;
}());
exports["default"] = SwitchOnCommand;
