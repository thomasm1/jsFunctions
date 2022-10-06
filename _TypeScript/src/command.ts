interface ICommand {
    execute(): void
}

class Invoker {
    private commands: { [id: string]: ICommand }
    constructor() {
        this.commands = {}
    }

    register(commandName: string, command: ICommand) {
        // Register commands in the Invoker
        this.commands[commandName] = command
    }

    execute(commandName: string) {
        // Execute any registered commands
        if (commandName in this.commands) {
            this.commands[commandName].execute();
        } else {
            console.log(`Command [${commandName}] not recognized`)
        }
    }
}

class Receiver {
    runCommand1() {
        console.log("Executing command 1")
    }
    runCommand2() {
        console.log("Executing command 2")
    }
}


class Command1 implements ICommand {

    // Cmd object implements  ICommand interface & runs on designated rec'r
    private receiver: Receiver

    constructor(receiver: Receiver) {
        this.receiver = receiver
    }
    execute() {
        this.receiver.runCommand1()
    }
}

class Command2 implements ICommand {

    // Cmd object implements  ICommand interface & runs on designated rec'r
    private receiver: Receiver

    constructor(receiver: Receiver) {
        this.receiver = receiver
    }
    execute() {
        this.receiver.runCommand2()
    }
}

// #1 make Receiver
const RECEIVER = new Receiver()
// #2 make Commands
const CMD_1 = new Command1(RECEIVER)
const CMD_2 = new Command2(RECEIVER)

// #3 Register commands with Invoker
const INVOKER = new Invoker()  
INVOKER.register('1', CMD_1) //  #commands: { [id: string]: ICommand }
INVOKER.register('2', CMD_2) //  #commands: { [id: string]: ICommand }

// #4 Execute commands that are registered on Invoker
INVOKER.execute('1')
INVOKER.execute('2')
INVOKER.execute('1')
INVOKER.execute('2')