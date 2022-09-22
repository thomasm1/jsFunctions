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
exports.FactoryAleph = void 0;
var ConcreteProduct = /** @class */ (function () {
    function ConcreteProduct() {
        this.name = '';
    }
    return ConcreteProduct;
}());
var ConcreteProductAA = /** @class */ (function (_super) {
    __extends(ConcreteProductAA, _super);
    function ConcreteProductAA() {
        var _this = _super.call(this) //<<<<<<<<<<<<<<<<<<<<<<--dont forget super
         || this;
        _this.name = 'FactoryAleph: ConcreteProduct-X';
        return _this;
    }
    return ConcreteProductAA;
}(ConcreteProduct));
var ConcreteProductBB = /** @class */ (function (_super) {
    __extends(ConcreteProductBB, _super);
    function ConcreteProductBB() {
        var _this = _super.call(this) || this;
        _this.name = 'FactoryAleph: ConcreteProduct-Y';
        return _this;
    }
    return ConcreteProductBB;
}(ConcreteProduct));
var ConcreteProductCC = /** @class */ (function (_super) {
    __extends(ConcreteProductCC, _super);
    function ConcreteProductCC() {
        var _this = _super.call(this) || this;
        _this.name = 'FactoryAleph: ConcreteProduct-Z';
        return _this;
    }
    return ConcreteProductCC;
}(ConcreteProduct));
var FactoryAleph = /** @class */ (function () {
    function FactoryAleph() {
    }
    FactoryAleph.getObject = function (some_property) {
        try {
            if (some_property === 'x') {
                return new ConcreteProductAA();
            }
            else if (some_property === 'y') {
                return new ConcreteProductBB();
            }
            else if (some_property === 'z') {
                return new ConcreteProductCC();
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
    return FactoryAleph;
}());
exports.FactoryAleph = FactoryAleph;
