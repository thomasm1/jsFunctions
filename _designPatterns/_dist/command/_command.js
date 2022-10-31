var Invoker = /** @class */ (function () {
    function Invoker() {
        this.commands = {};
    }
    Invoker.prototype.register = function (commandName, command) {
        // Register commands in the Invoker
        this.commands[commandName] = command;
    };
    Invoker.prototype.execute = function (commandName) {
        // Execute any registered commands
        if (commandName in this.commands) {
            this.commands[commandName].execute();
        }
        else {
            console.log("Command [".concat(commandName, "] not recognized"));
        }
    };
    return Invoker;
}());
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.runCommand1 = function () {
        console.log("Executing command 1");
    };
    Receiver.prototype.runCommand2 = function () {
        console.log("Executing command 2");
    };
    return Receiver;
}());
var Command1 = /** @class */ (function () {
    function Command1(receiver) {
        this.receiver = receiver;
    }
    Command1.prototype.execute = function () {
        this.receiver.runCommand1();
    };
    return Command1;
}());
var Command2 = /** @class */ (function () {
    function Command2(receiver) {
        this.receiver = receiver;
    }
    Command2.prototype.execute = function () {
        this.receiver.runCommand2();
    };
    return Command2;
}());
// #1 make Receiver
var RECEIVER = new Receiver();
// #2 make Commands
var CMD_1 = new Command1(RECEIVER);
var CMD_2 = new Command2(RECEIVER);
// #3 Register commands with Invoker
var INVOKER = new Invoker();
INVOKER.register('1', CMD_1); //  #commands: { [id: string]: ICommand }
INVOKER.register('2', CMD_2); //  #commands: { [id: string]: ICommand }
// #4 Execute commands that are registered on Invoker
INVOKER.execute('1');
INVOKER.execute('2');
INVOKER.execute('1');
INVOKER.execute('2');
