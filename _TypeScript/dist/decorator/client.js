"use strict";
exports.__esModule = true;
var value_1 = require("./value");
var add_1 = require("./add");
var subtract_1 = require("./subtract");
var A = (0, value_1["default"])(1);
var B = (0, value_1["default"])(2);
var C = (0, value_1["default"])(5);
console.log((0, add_1["default"])(A, B).value);
console.log((0, add_1["default"])(A, 100).value);
console.log((0, subtract_1["default"])(C, A).value);
console.log((0, subtract_1["default"])((0, add_1["default"])(C, B), A).value);
console.log((0, subtract_1["default"])(100, 101).value);
console.log((0, add_1["default"])((0, subtract_1["default"])((0, add_1["default"])(C, B), A), 100).value);
console.log((0, subtract_1["default"])(123, (0, add_1["default"])(C, C)).value);
console.log((0, add_1["default"])((0, subtract_1["default"])((0, add_1["default"])(C, 10), A), 100).value);
console.log(A.value);
console.log(B.value);
console.log(C.value);