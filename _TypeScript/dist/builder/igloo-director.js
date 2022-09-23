"use strict";
exports.__esModule = true;
var house_builder_1 = require("./house-builder");
var IglooDirector = /** @class */ (function () {
    function IglooDirector() {
    }
    IglooDirector.construct = function () {
        return new house_builder_1["default"]()
            .setBuildingType('Igloo')
            .setWallMaterial('Ice')
            .setNumberDoors(1)
            .getResult();
    };
    return IglooDirector;
}());
exports["default"] = IglooDirector;
