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
var ConcreteProduct = /** @class */ (function () {
    function ConcreteProduct() {
        this.name = '';
    }
    return ConcreteProduct;
}());
var ConcreteProductA = /** @class */ (function (_super) {
    __extends(ConcreteProductA, _super);
    function ConcreteProductA() {
        var _this = _super.call(this) || this;
        _this.name = 'Concrete A Product';
        return _this;
    }
    return ConcreteProductA;
}(ConcreteProduct));
var ConcreteProductB = /** @class */ (function (_super) {
    __extends(ConcreteProductB, _super);
    function ConcreteProductB() {
        var _this = _super.call(this) || this;
        _this.name = 'Concrete B Product';
        return _this;
    }
    return ConcreteProductB;
}(ConcreteProduct));
var ConcreteProductC = /** @class */ (function (_super) {
    __extends(ConcreteProductC, _super);
    function ConcreteProductC() {
        var _this = _super.call(this) || this;
        _this.name = 'Concrete C Product';
        return _this;
    }
    return ConcreteProductC;
}(ConcreteProduct));
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.createObject = function (propertyRequest) {
        if (propertyRequest === 'a') {
            return new ConcreteProductA();
        }
        else if (propertyRequest === 'b') {
            return new ConcreteProductB();
        }
        else if (propertyRequest === 'c') {
            return new ConcreteProductC();
        }
    };
    return Creator;
}());
var product = Creator.createObject('b');
console.log(product.name);
