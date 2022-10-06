"use strict";
exports.__esModule = true;
var CubeB = /** @class */ (function () {
    function CubeB() {
    }
    CubeB.prototype.create = function (top_left_front, bottom_right_back) {
        //if not busy, then manufacture 
        var now = Date.now();
        if (now > CubeB.last_time + 3000) { // didn't just make one
            console.log("copmany B  built cube with dims \n                [".concat(top_left_front[0], ",").concat(top_left_front[1], ",\n                ").concat(top_left_front[2], "],\n                [").concat(bottom_right_back[0], ",").concat(bottom_right_back[1], ",").concat(bottom_right_back[2], "]"));
            CubeB.last_time = now;
            return true;
        }
        return false; // busy
    };
    CubeB.last_time = Date.now();
    return CubeB;
}());
exports["default"] = CubeB;
