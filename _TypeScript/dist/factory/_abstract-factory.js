"use strict";
exports.__esModule = true;
var _abstract_factory_aleph_1 = require("./_abstract-factory-aleph");
var _abstract_factory_beth_1 = require("./_abstract-factory-beth");
var AbstractFactory = /** @class */ (function () {
    function AbstractFactory() {
    }
    //  MAke Concrete Class using conditional logic >>>>
    AbstractFactory.createObject = function (factory) {
        try {
            if (['a-x', 'a-y', 'a-z'].indexOf(factory) > -1) {
                return _abstract_factory_aleph_1.FactoryAleph.getObject(factory[2]);
            }
            if (['b-x', 'b-y', 'b-z'].indexOf(factory) > -1) {
                return _abstract_factory_beth_1.FactoryBeth.getObject(factory[2]);
            }
            throw new Error('No Factory Found'); //  new Error(message, [fileName, lineNumber])
        }
        catch (e) {
            console.log(e);
        }
    };
    return AbstractFactory;
}());
// CLIENT
var PRODUCT = AbstractFactory.createObject('a-z');
console.log(PRODUCT); // 
PRODUCT = AbstractFactory.createObject('a-y');
console.log(PRODUCT); // 
PRODUCT = AbstractFactory.createObject('a-x');
console.log(PRODUCT); // 
PRODUCT = AbstractFactory.createObject('b-x');
console.log(PRODUCT);
PRODUCT = AbstractFactory.createObject('b-y');
console.log(PRODUCT);
PRODUCT = AbstractFactory.createObject('b-z');
console.log(PRODUCT);
