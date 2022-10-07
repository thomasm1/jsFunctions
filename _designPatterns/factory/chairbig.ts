import Chair from './chair'

export default class ChairBig extends Chair {
    constructor(){
        super()
        this.height = 90
        this.width = 90
        this.depth = 90
    }
}