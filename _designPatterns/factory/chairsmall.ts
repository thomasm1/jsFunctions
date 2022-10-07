import Chair from './chair'

export default class ChairSmall extends Chair {
    constructor(){
        super()
        this.width = 20
        this.height = 20
        this.depth = 20
    }
}