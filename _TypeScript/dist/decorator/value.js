"use strict";
exports.__esModule = true;
var _Value = /** @class */ (function () {
    function _Value(value) {
        this.value = value;
    }
    return _Value;
}());
function Value(value) {
    return new _Value(value); // <== no need for client to use 'new'
}
exports["default"] = Value;
