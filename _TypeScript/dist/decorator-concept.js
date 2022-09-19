var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.method = function () {
        return 'Component Method';
    };
    return Component;
}());
var Decorator = /** @class */ (function () {
    function Decorator(object) {
        this.object = object;
    }
    Decorator.prototype.method = function () {
        return "Decorator Methd(".concat(this.object.method(), ")");
    };
    return Decorator;
}());
//////// CLIENT
var myComponent = new Component();
console.log(myComponent.method());
// component decorated
var mydecorated = new Decorator(myComponent);
console.log(mydecorated.method());
// decorated component ... decorated again
var mydecoratedAgain = new Decorator(mydecorated);
console.log(mydecoratedAgain.method());
