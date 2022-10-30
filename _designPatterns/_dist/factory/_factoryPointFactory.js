var CoordinateSystem = {
    CARTESIAN: 0,
    POLAR: 1
};
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.newCartesianPoint = function (x, y) {
        return new Point(x, y);
    };
    Point.newPolarPoint = function (rho, theta) {
        return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
    };
    return Point;
}());
var PointFactory = /** @class */ (function () {
    function PointFactory() {
    }
    PointFactory.newCartesianPoint = function (x, y) {
        return new Point(x, y);
    };
    PointFactory.newPolarPoint = function (rho, theta) {
        return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
    };
    return PointFactory;
}());
var p1 = PointFactory.newPolarPoint(2, 3);
var p2 = PointFactory.newCartesianPoint(2, 3);
console.log("p1: " + p1);
console.log("p2: " + p2);
