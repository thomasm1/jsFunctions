
enum ThreadState {
    Initializing = 'Initializing',
    Started = 'Started',
    Running = 'Running',
    Finished = 'Finished',
}

interface IThreadState {
    // A State Interface
    request(): void
}

class StateContext implements IThreadState {
      state: ThreadState

    constructor() {
        this.state = ThreadState.Initializing
    }

    public getState() {
        return this.state
    }

    public setState(value: ThreadState) {
        switch (value) {
            case ThreadState.Started:
                this.request = Started.prototype.request
                break
            case ThreadState.Running:
                this.request = Running.prototype.request
                break
            case ThreadState.Finished:
                this.request = Finished.prototype.request
                break
        }
        this.state = value
    }

    request() {
        // Does nothing until state changes, when then
        // this method handle is reassigned to a different
        // concrete states request method
    }
}

class Started implements IThreadState {
    // A ConcreteState Subclass
    request() {
        console.log(`I am now Started`)
    }
}

class Running implements IThreadState {
    // A ConcreteState Subclass
    request() {
        console.log(`I am now Running`)
    }
}

class Finished implements IThreadState {
    // A ConcreteState Subclass
    request() {
        console.log(`I am now Finished`)
    }
}

// The Client
const STATE_CONTEXT = new StateContext()
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state)
STATE_CONTEXT.state = ThreadState.Started
STATE_CONTEXT.request()
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state)
STATE_CONTEXT.state = ThreadState.Running
STATE_CONTEXT.request()
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state)
STATE_CONTEXT.state = ThreadState.Finished
STATE_CONTEXT.request()
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state)
STATE_CONTEXT.state = ThreadState.Started
STATE_CONTEXT.request()
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state)
STATE_CONTEXT.state = ThreadState.Running
STATE_CONTEXT.request()
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state)
STATE_CONTEXT.state = ThreadState.Finished
STATE_CONTEXT.request()
console.log('STATE_CONTEXT = ' + STATE_CONTEXT.state)
 