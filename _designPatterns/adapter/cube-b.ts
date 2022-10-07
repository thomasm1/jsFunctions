export interface ICubeB {
    create(   // ICUBE-A API COORDS
        top_left_front: [number, number, number],
        bottom_right_back: [number, number, number]
        ): boolean

}

export default class CubeB implements ICubeB {
    static last_time = Date.now()

    create(top_left_front: [number, number, number],
        bottom_right_back: [number, number, number]):boolean {
        //if not busy, then manufacture 
        const now = Date.now()
        if ( now > CubeB.last_time+3000) { // didn't just make one
            console.log(
                `copmany B  built cube with dims 
                [${top_left_front[0]},${top_left_front[1]},
                ${top_left_front[2]}],
                [${bottom_right_back[0]},${bottom_right_back[1]},${bottom_right_back[2]}]` )
            CubeB.last_time = now
            return true
        }
        return false // busy
    }
}