var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = new Set();
    }
    Subject.prototype.subscribe = function (observer) {
        this.observers.add(observer);
    };
    Subject.prototype.unsubscribe = function (observer) {
        this.observers["delete"](observer);
    };
    Subject.prototype.notify = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.observers.forEach(function (observer) {
            observer.notify.apply(observer, args);
        });
    };
    return Subject;
}());
var Observer = /** @class */ (function () {
    function Observer(observable) {
        this.id = COUNTER++;
        observable.subscribe(this);
    }
    Observer.prototype.notify = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("OBSERVER_".concat(this.id, " received ").concat(JSON.stringify(args)));
    };
    return Observer;
}());
//  Client
var COUNTER = 1; //   ID 
var SUBJECT = new Subject();
var OBSERVER_1 = new Observer(SUBJECT);
var OBSERVER_2 = new Observer(SUBJECT);
SUBJECT.notify('First Notification', [1, 2, 3]);
SUBJECT.unsubscribe(OBSERVER_2);
SUBJECT.notify('Second Notification', { A: 1, B: 2, C: 3 });
