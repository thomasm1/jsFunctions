"use strict";
exports.__esModule = true;
var _Add = /** @class */ (function () {
    function _Add(valu1, valu2) {
        var left = Object.prototype.hasOwnProperty.call(valu1, 'value')
            ? valu1.value // calling Object, would have value
            : valu1;
        var right = Object.prototype.hasOwnProperty.call(valu2, 'value')
            ? valu2.value // calling Object, would have value
            : valu2;
        this.value = left + right;
    }
    return _Add;
}());
function Add(valu1, valu2) {
    return new _Add(valu1, valu2);
}
exports["default"] = Add;
