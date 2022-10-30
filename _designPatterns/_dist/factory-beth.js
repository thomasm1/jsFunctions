"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.FactoryBeth = void 0;
var ConcreteProduct = /** @class */ (function () {
    function ConcreteProduct() {
        this.name = '';
    }
    return ConcreteProduct;
}());
var ConcreteProductXX = /** @class */ (function (_super) {
    __extends(ConcreteProductXX, _super);
    function ConcreteProductXX() {
        var _this = _super.call(this) //<<<<<<<<<<<<<<<<<<<<<<--dont forget super
         || this;
        _this.name = 'FactoryBeth:  ConcreteProductXX';
        return _this;
    }
    return ConcreteProductXX;
}(ConcreteProduct));
var ConcreteProductYY = /** @class */ (function (_super) {
    __extends(ConcreteProductYY, _super);
    function ConcreteProductYY() {
        var _this = _super.call(this) || this;
        _this.name = 'FactoryBeth: ConcreteProductYY';
        return _this;
    }
    return ConcreteProductYY;
}(ConcreteProduct));
var ConcreteProductZZ = /** @class */ (function (_super) {
    __extends(ConcreteProductZZ, _super);
    function ConcreteProductZZ() {
        var _this = _super.call(this) || this;
        _this.name = 'FactoryBeth: ConcreteProductZZ';
        return _this;
    }
    return ConcreteProductZZ;
}(ConcreteProduct));
var FactoryBeth = /** @class */ (function () {
    function FactoryBeth() {
    }
    FactoryBeth.getObject = function (some_property) {
        try {
            if (some_property === 'x') {
                return new ConcreteProductXX();
            }
            else if (some_property === 'y') {
                return new ConcreteProductYY();
            }
            else if (some_property === 'z') {
                return new ConcreteProductZZ();
            }
            else {
                throw new Error('Class Not Found');
            }
        }
        catch (e) {
            console.log(e);
        }
        return new ConcreteProduct();
    };
    return FactoryBeth;
}());
exports.FactoryBeth = FactoryBeth;
