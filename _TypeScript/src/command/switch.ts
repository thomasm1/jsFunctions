// INVOKE Class

import ICommand from './icommand'

export default class Switch {
    private commands: { [id: string]: ICommand}
    private history: [number, string][]

    constructor() {
        this.commands = {}
        this.history = []
    }
    
    showHistory(): void {
        // PRINT HISTORY OF EACH TIME A COMMAND WAS INVOKED
        this.history.forEach((row) => {
            console.log(`${row[0]} : ${row[1]}`)
        })
    }
    register(commandName: string, command: ICommand): void {
        // Register commands in the invoker
        this.commands[commandName] = command
    }
    execute(commandName: string): void {
        // execute any registered commands
        if(commandName in this.commands) {
            this.commands[commandName].execute()
            this.history.push([Date.now(), commandName])
        } else {
            console.log(`Command [${commandName}] not recoqnized`)
        }
    }
    replayLast(numberOfCommands: number): void {
       const commands = this.history.slice(
        this.history.length - numberOfCommands, 
        this.history.length  
       )
       commands.forEach((command) => {
        this.commands[command[1]].execute()
       })
    }
}