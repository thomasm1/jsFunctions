class Memento {
    // container for the state
    state: string;
    constructor(state: string) {
        this.state = state;
    }
}

class Originator {
    // The class whose state will be saved
    private state: string 
    constructor(state: string) {
        this.state = '';
    }

    public set state(state: string) {
        this.state = state;
    }
    public get state() {
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
    const ORIGINATOR = new Originator();
    const Caretaker = new Caretaker(ORIGINATOR);
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

    