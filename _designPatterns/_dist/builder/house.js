"use strict";
exports.__esModule = true;
var House = /** @class */ (function () {
    function House() {
        this.doors = 0;
        this.windows = 0;
        this.wallMaterial = '';
        this.buildingType = '';
    }
    House.prototype.construction = function () {
        return "Material ".concat(this.wallMaterial, " ").concat(this.buildingType, " with ").concat(this.doors, " door[s] ").concat(this.windows, " windoes");
    };
    return House;
}());
exports["default"] = House;
