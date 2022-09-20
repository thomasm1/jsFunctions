"use strict";
exports.__esModule = true;
exports.DataModel = void 0;
var data_controller_1 = require("./data-controller");
var DataModel = /** @class */ (function () {
    function DataModel() {
        // A Subject ===> the Observable....
        this.observers = {};
        this.counter = 0;
        this.dataController = new data_controller_1.DataController();
        this.dataController.subscribe(this);
    }
    DataModel.prototype.subscribe = function (observer) {
        this.counter++;
        this.observers[this.counter] = observer;
        return this.counter;
    };
    DataModel.prototype.unsubscribe = function (observerId) {
        delete this.observers[observerId];
    };
    DataModel.prototype.notify = function (data) {
        var _this = this;
        Object.keys(this.observers).forEach(function (observer) {
            _this.observers[parseInt(observer)].notify(data);
        });
    };
    return DataModel;
}());
exports.DataModel = DataModel;
