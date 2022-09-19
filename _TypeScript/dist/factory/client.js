"use strict";
exports.__esModule = true;
var chair_factory_1 = require("./chair-factory");
var myChair = chair_factory_1["default"].getChair('ChairBig');
console.log(myChair.getDimensions());
var mySmallChair = chair_factory_1["default"].getChair('ChairSmall');
console.log(mySmallChair.getDimensions());
