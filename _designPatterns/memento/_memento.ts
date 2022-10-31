// memento/_memento.ts:30:16 - error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
// needs ts.config fix or something
class Memento {
    // container for the state
    state: string;
    constructor(state: string) {
        this.state = state;
    }
}

   class Originator {
 
    // The class whose state will be saved 
    state: string 
 
    constructor(state: string = "") {
        this.state = ''; 
    }

    public setState(state: string) {
        this.state = state;
    }
    public getState() {
        return this.state;
    }
    public get memento(): Memento {
        console.log(
            'Originator: Saving to Memento: ' + this.state.substring(0, 9) + '...'
        )
        return new Memento(this.state);
    }
    public set memento(memento: Memento) {
        this.state = memento.state;
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
        this.originator.memento = this.mementos[index];
    }

    }

        ///////////////////////////
    // Client 
    ///////////////////////////
    const _originator = new Originator();
    const _caretaker = new Caretaker(_originator);
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