"use strict";
exports.__esModule = true;
var chairsmall_1 = require("./chairsmall");
var chairbig_1 = require("./chairbig");
var ChairFactory = /** @class */ (function () {
    function ChairFactory() {
    }
    ChairFactory.getChair = function (chair) {
        if (chair == 'ChairBig') {
            return new chairbig_1["default"]();
        }
        else if (chair == 'ChairSmall') {
            return new chairsmall_1["default"]();
        }
    };
    return ChairFactory;
}());
exports["default"] = ChairFactory;
