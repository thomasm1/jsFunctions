"use strict";
exports.__esModule = true;
var Chair = /** @class */ (function () {
    function Chair() {
        this.height = 0;
        this.width = 0;
        this.depth = 0;
    }
    Chair.prototype.getDimensions = function () {
        return {
            width: this.width,
            height: this.height,
            depth: this.depth
        };
    };
    return Chair;
}());
exports["default"] = Chair;
