"use strict";
exports.__esModule = true;
var SwitchOffCommand = /** @class */ (function () {
    function SwitchOffCommand(light) {
        this.light = light;
    }
    SwitchOffCommand.prototype.execute = function () {
        this.light.turnOff();
    };
    return SwitchOffCommand;
}());
exports["default"] = SwitchOffCommand;
