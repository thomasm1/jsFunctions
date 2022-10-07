"use strict";
exports.__esModule = true;
var house_builder_1 = require("./house-builder");
var HouseBoatDirector = /** @class */ (function () {
    function HouseBoatDirector() {
    }
    HouseBoatDirector.construct = function () {
        return new house_builder_1["default"]()
            .setBuildingType('house built')
            .setWallMaterial('Wood')
            .setNumberDoors(6)
            .setNumberWindows(8)
            .getResult();
    };
    return HouseBoatDirector;
}());
exports["default"] = HouseBoatDirector;
