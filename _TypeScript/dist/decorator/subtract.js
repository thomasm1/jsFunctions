"use strict";
exports.__esModule = true;
var _Subtract = /** @class */ (function () {
    function _Subtract(valu1, valu2) {
        var left = Object.prototype.hasOwnProperty.call(valu1, 'value')
            ? valu1.value // calling Object, would have value
            : valu1;
        var right = Object.prototype.hasOwnProperty.call(valu2, 'value')
            ? valu2.value // calling Object, would have value
            : valu2;
        this.value = left - right;
    }
    return _Subtract;
}());
function Subtract(valu1, valu2) {
    return new _Subtract(valu1, valu2);
}
exports["default"] = Subtract;
