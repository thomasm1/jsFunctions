class Memento {
    // container for the state
    state: string;
    constructor(state: string) {
        this.state = state;
    }
}

class Originator {
    // The class whose state will be saved
    private _state: string

    constructor(state: string = '') {
        this._state = state;
    }

    public set state(state: string) {
        this._state = state;
    }
    public get state() {
        return this._state;
    }
    public get memento(): Memento {
        console.log(
            'Originator: Saving to Memento: ' + this._state.substring(0, 9) + '...'
        )
        return new Memento(this.state);
    }
    public set memento(memento: Memento) {
        this._state = memento.state;
        console.log(
            'Originator: State after restoring from Memento: ' + this.state
        )
    }
}

class Caretaker {
    // Guardian - Provides a narrow interface to access the memento
    private mementos: Memento[] = [];
    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
        this.mementos = [];
    }

    create() {
        // Creates a memento of Originators current state and adds it to the list
        console.log('\nCaretaker: Saving Originator\'s state...');
        this.mementos.push(this.originator.memento);
    }

    restore(index: number) {
        // Restores the Originator to a previous state
        if (index < 0 || index >= this.mementos.length) {
            console.log("caretaker: index out of bounds");
            return;
        }
        this.originator.memento = this.mementos[index];
    }

}

///////////////////////////
// Client 
///////////////////////////
const ORIGINATOR = new Originator();
const caretaker = new Caretaker(ORIGINATOR);
ORIGINATOR.state = 'State #1';
ORIGINATOR.state = 'State #2';
caretaker.create(); // backup
ORIGINATOR.state = 'State #3';
caretaker.create(); // backup

// more changes
ORIGINATOR.state = 'State #4';
console.log(ORIGINATOR.state);

caretaker.restore(0); // restore to State #2
console.log(ORIGINATOR.state);

caretaker.restore(1); // restore to State #2
console.log(ORIGINATOR.state);


