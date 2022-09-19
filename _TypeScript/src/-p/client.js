"use strict";
exports.__esModule = true;
var chair_factory_1 = require("./chair-factory");
var myChair = chair_factory_1["default"].getChair('BigChair');
console.log(myChair.getDimensions);
