var Memento = /** @class */ (function () {
    function Memento(state) {
        this.state = state;
    }
    return Memento;
}());
var Originator = /** @class */ (function () {
    function Originator(state) {
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
