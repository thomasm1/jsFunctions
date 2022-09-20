var Product = /** @class */ (function () {
    function Product() {
        this.parts = [];
    }
    return Product;
}());
var Builder = /** @class */ (function () {
    function Builder() {
        this.product = new Product();
    }
    Builder.prototype.buildPartA = function () {
        this.product.parts.push('a');
        return this;
    };
    Builder.prototype.buildPartB = function () {
        this.product.parts.push('b');
        return this;
    };
    Builder.prototype.buildPartC = function () {
        this.product.parts.push('c');
        return this;
    };
    Builder.prototype.getResult = function () {
        return this.product;
    };
    return Builder;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.construct = function () {
        'Constructs and returns the final product';
        return new Builder()
            .buildPartA()
            .buildPartB()
            .buildPartC()
            .getResult();
    };
    return Director;
}());
/// CLIENT
var prod = Director.construct();
console.log(prod.parts);
