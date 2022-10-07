import ISwitchCommand from './iswitch-command'
import Light from './light'

export default class SwitchOffCommand implements ISwitchCommand {
    private light: Light
    constructor(light: Light) {
        this.light = light
    }

    execute(): void {
        this.light.turnOff()
    }
}