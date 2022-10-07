"use strict";
exports.__esModule = true;
// Singleton Reports
var Reports = /** @class */ (function () {
    function Reports() {
        this.reports = {};
        this.rowId = 0;
        if (Reports.instance) {
            return Reports.instance;
        }
        Reports.instance = this;
    }
    Reports.prototype.getHistory = function () {
        return this.reports;
    };
    Reports.prototype.logEvent = function (event) {
        this.reports[this.rowId] = [Date.now(), event];
        this.rowId = this.rowId + 1;
        return true;
    };
    return Reports;
}());
exports["default"] = Reports;
fff;
