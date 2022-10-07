"use strict";
exports.__esModule = true;
exports.TableView = exports.PieGraphView = exports.BarGraphView = void 0;
var BarGraphView = /** @class */ (function () {
    function BarGraphView(observable) {
        this.observable = observable;
        this.id = this.observable.subscribe(this);
    }
    BarGraphView.prototype.notify = function (data) {
        console.log("BarGraph, id: ".concat(this.id));
        this.draw(data);
    };
    BarGraphView.prototype.draw = function (data) {
        console.log("Drawing a Bar Graph using data: ".concat(JSON.stringify(data)));
    };
    BarGraphView.prototype["delete"] = function () {
        this.observable.unsubscribe(this.id);
    };
    return BarGraphView;
}());
exports.BarGraphView = BarGraphView;
var PieGraphView = /** @class */ (function () {
    function PieGraphView(observable) {
        this.observable = observable;
        this.id = this.observable.subscribe(this);
    }
    PieGraphView.prototype.notify = function (data) {
        console.log("PieGraph, id:".concat(this.id));
        this.draw(data);
    };
    PieGraphView.prototype.draw = function (data) {
        console.log("Drawing a Pie graph using data:".concat(data));
    };
    PieGraphView.prototype["delete"] = function () {
        this.observable.unsubscribe(this.id);
    };
    return PieGraphView;
}());
exports.PieGraphView = PieGraphView;
var TableView = /** @class */ (function () {
    function TableView(observable) {
        this.observable = observable;
        this.id = this.observable.subscribe(this);
    }
    TableView.prototype.notify = function (data) {
        console.log("TableView, id:".concat(this.id));
        this.draw(data);
    };
    TableView.prototype.draw = function (data) {
        console.log("Drawing a Table using data:".concat(JSON.stringify(data)));
    };
    TableView.prototype["delete"] = function () {
        this.observable.unsubscribe(this.id);
    };
    return TableView;
}());
exports.TableView = TableView;
