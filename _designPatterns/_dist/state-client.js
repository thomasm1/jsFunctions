var ThreadState;
(function (ThreadState) {
    ThreadState["Initializing"] = "Initializing";
    ThreadState["Started"] = "Started";
    ThreadState["Running"] = "Running";
    ThreadState["Finished"] = "Finished";
})(ThreadState || (ThreadState = {}));
var StateContext = /** @class */ (function () {
    function StateContext() {
        this.state = ThreadState.Initializing;
    }
    StateContext.prototype.getState = function () {
        return this.state;
    };
    StateContext.prototype.setState = function (value) {
        switch (value) {
            case ThreadState.Started:
                this.request = Started.prototype.request;
                break;
            case ThreadState.Running:
                this.request = Running.prototype.request;
                break;
            case ThreadState.Finished:
                this.request = Finished.prototype.request;
                break;
        }
        this.state = value;
    };
    StateContext.prototype.request = function () {
        // Does nothing until state changes, when then
        // this method handle is reassigned to a different
        // concrete states request method
    };
    return StateContext;
}());
var Started = /** @class */ (function () {
    function Started() {
    }
    // A ConcreteState Subclass
    Started.prototype.request = function () {
        console.log("I am now Started");
    };
    return Started;
}());
var Running = /** @class */ (function () {
    function Running() {
    }
    // A ConcreteState Subclass
    Running.prototype.request = function () {
        console.log("I am now Running");
    };
    return Running;
}());
var Finished = /** @class */ (function () {
    function Finished() {
    }
    // A ConcreteState Subclass
    Finished.prototype.request = function () {
        console.log("I am now Finished");
    };
    return Finished;
}());
// The Client
var STATE_CONTEXT = new StateContext();
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state);
STATE_CONTEXT.state = ThreadState.Started;
STATE_CONTEXT.request();
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state);
STATE_CONTEXT.state = ThreadState.Running;
STATE_CONTEXT.request();
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state);
STATE_CONTEXT.state = ThreadState.Finished;
STATE_CONTEXT.request();
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state);
STATE_CONTEXT.state = ThreadState.Started;
STATE_CONTEXT.request();
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state);
STATE_CONTEXT.state = ThreadState.Running;
STATE_CONTEXT.request();
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state);
STATE_CONTEXT.state = ThreadState.Finished;
STATE_CONTEXT.request();
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state);
