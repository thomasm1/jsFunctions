var Context = /** @class */ (function () {
    function Context() {
        this.stateHandles = [
            new ConcreteStateA(),
            new ConcreteStateB(),
            new ConcreteStateC(),
        ];
        this.handle = undefined;
    }
    Context.prototype.request = function () {
        // A method of the state that dynamically changes which
        // class it uses depending on the value of this.handle
        this.handle = this.stateHandles[Math.floor(Math.random() * 3)];
        return this.handle;
    };
    return Context;
}());
var ConcreteStateA = /** @class */ (function () {
    function ConcreteStateA() {
    }
    // A ConcreteState Subclass
    ConcreteStateA.prototype.toString = function () {
        return 'I am ConcreteStateA';
    };
    return ConcreteStateA;
}());
var ConcreteStateB = /** @class */ (function () {
    function ConcreteStateB() {
    }
    // A ConcreteState Subclass
    ConcreteStateB.prototype.toString = function () {
        return 'I am ConcreteStateB';
    };
    return ConcreteStateB;
}());
var ConcreteStateC = /** @class */ (function () {
    function ConcreteStateC() {
    }
    // A ConcreteState Subclass
    ConcreteStateC.prototype.toString = function () {
        return 'I am ConcreteStateC';
    };
    return ConcreteStateC;
}());
// The Client
var CONTEXT = new Context();
console.log(CONTEXT.request());
console.log(CONTEXT.request());
console.log(CONTEXT.request());
console.log(CONTEXT.request());
console.log(CONTEXT.request());
