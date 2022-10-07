const CoordinateSystem:Object = {
    CARTESIAN: 0,
    POLAR:1
}

class Point {
    x:number
    y:number
    constructor(x:number,y:number) {
        this.x = x;
        this.y = y;
    }
    static newCartesianPoint(x:number,y:number) { 
        return new Point(x,y);
    }
    static newPolarPoint(rho:number,theta:number) {
        return new Point(rho*Math.cos(theta), rho*Math.sin(theta))
    }

    // static get factory() {
    //     return new PointFactory()
    // }
    
}
class PointFactory {
    static newCartesianPoint(x:number,y:number) {
        return new Point(x,y)
    }

    static newPolarPoint(rho:number,theta:number) {
        return new Point(rho*Math.cos(theta), rho*Math.sin(theta));
    }
}
let p1 =   PointFactory.newPolarPoint(2,3 )
let p2 =  PointFactory.newCartesianPoint(2,3 )
console.log("p1: "+p1)
console.log("p2: "+p2)