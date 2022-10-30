var NumberWheel = /** @class */ (function () {
    function NumberWheel() {
        this.index = 0;
    }
    NumberWheel.prototype.next = function () {
        this.index = this.index + 1;
        return (this.index * 2) % 11;
    };
    return NumberWheel;
}());
var NUMBERWHEEL = new NumberWheel();
for (var i = 0; i < 22; i++) {
    process.stdout.write(NUMBERWHEEL.next() + '-');
}
