"use strict";
exports.__esModule = true;
var CubeA = /** @class */ (function () {
    function CubeA() {
    }
    CubeA.prototype.manufacture = function (width, height, depth) {
        //if not busy, then manufacture 
        var now = Date.now();
        if (now > CubeA.last_time + 1500) { // didn't just make one
            console.log("copmanyA already built cube with dims ".concat(width, "x").concat(height, "x").concat(depth));
            CubeA.last_time = now;
            return true;
        }
        return false; // busy
    };
    CubeA.last_time = Date.now();
    return CubeA;
}());
exports["default"] = CubeA;
