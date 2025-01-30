<<<<<<< HEAD
// memento/_memento.ts:30:16 - error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
// needs ts.config fix or something
=======
>>>>>>> f8a28c61707bf5b8f60ec8d6627a01ae28db5663
var Memento = /** @class */ (function () {
    function Memento(state) {
        this.state = state;
    }
    return Memento;
}());
var Originator = /** @class */ (function () {
    function Originator(state) {
<<<<<<< HEAD
        if (state === void 0) { state = ""; }
        this.state = '';
    }
    Originator.prototype.setState = function (state) {
        this.state = state;
    };
    Originator.prototype.getState = function () {
        return this.state;
    };
=======
        this.state = '';
    }
    Object.defineProperty(Originator.prototype, "state", {
        get: function () {
            return this.state;
        },
        set: function (state) {
            this.state = state;
        },
        enumerable: false,
        configurable: true
    });
>>>>>>> f8a28c61707bf5b8f60ec8d6627a01ae28db5663
    Object.defineProperty(Originator.prototype, "memento", {
        get: function () {
            console.log('Originator: Saving to Memento: ' + this.state.substring(0, 9) + '...');
            return new Memento(this.state);
        },
        set: function (memento) {
            this.state = memento.state;
            console.log('Originator: State after restoring from Memento: ' + this.state);
        },
        enumerable: false,
        configurable: true
    });
    return Originator;
}());
var Caretaker = /** @class */ (function () {
    function Caretaker(originator) {
        // Guardian - Provides a narrow interface to access the memento
        this.mementos = [];
        this.originator = originator;
        this.mementos = [];
    }
    Caretaker.prototype.create = function () {
        // Creates a memento of Originators current state and adds it to the list
        console.log('\nCaretaker: Saving Originator\'s state...');
        this.mementos.push(this.originator.memento);
    };
    Caretaker.prototype.restore = function (index) {
        // Restores the Originator to a previous state
        this.originator.memento = this.mementos[index];
    };
    return Caretaker;
}());
///////////////////////////
// Client 
///////////////////////////
<<<<<<< HEAD
var _originator = new Originator();
var _caretaker = new Caretaker(_originator);
_originator.state = 'State #1';
_originator.state = 'State #2';
_caretaker.create(); // backup
_originator.state = 'State #3';
_caretaker.create(); // backup
// more changes
_originator.state = 'State #4';
console.log(_originator.state);
_caretaker.restore(0); // restore to State #2
console.log(_originator.state);
_caretaker.restore(1); // restore to State #2
console.log(_originator.state);
=======
var ORIGINATOR = new Originator();
var Caretaker = new Caretaker(ORIGINATOR);
ORIGINATOR.state = 'State #1';
ORIGINATOR.state = 'State #2';
Caretaker.create(); // backup
ORIGINATOR.state = 'State #3';
Caretaker.create(); // backup
// more changes
ORIGINATOR.state = 'State #4';
console.log(ORIGINATOR.state);
Caretaker.restore(0); // restore to State #2
console.log(ORIGINATOR.state);
Caretaker.restore(1); // restore to State #2
console.log(ORIGINATOR.state);
>>>>>>> f8a28c61707bf5b8f60ec8d6627a01ae28db5663
