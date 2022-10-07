export interface ICubeA {
    manufacture(width: number, height: number, depth: number): boolean

}

export default class CubeA implements ICubeA {
    static last_time = Date.now()

    manufacture(width: number, height: number, depth: number):boolean {
        //if not busy, then manufacture 
        const now = Date.now()
        if ( now > CubeA.last_time+1500) { // didn't just make one
            console.log(
                `copmanyA already built cube with dims ${width}x${height}x${depth}`
            )
            CubeA.last_time = now
            return true
        }
        return false // busy
    }
}