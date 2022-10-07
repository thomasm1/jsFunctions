var ClassAleph = /** @class */ (function () {
    function ClassAleph() {
    }
    ClassAleph.prototype.methodAleph = function () {
        console.log('method A');
    };
    return ClassAleph;
}());
var ClassBeth = /** @class */ (function () {
    function ClassBeth() {
    }
    ClassBeth.prototype.methodBeth = function () {
        console.log('method B');
    };
    return ClassBeth;
}());
var ClassBethAdapter = /** @class */ (function () {
    function ClassBethAdapter() {
        this.classBeth = new ClassBeth();
    }
    ClassBethAdapter.prototype.methodAleph = function () {
        'calls the class b method_b instead';
        this.classBeth.methodBeth();
    };
    return ClassBethAdapter;
}());
// CLIENT /////////////////////////////////
// Before the adapter I need to test the objects class to 
// know which method to call.
var ITEMS = [new ClassAleph(), new ClassBeth()];
ITEMS.forEach(function (item) {
    if (item instanceof ClassBeth) {
        item.methodBeth();
    }
    else {
        item.methodAleph();
    }
});
// After creating an adapter for ClassB I can reuse the same method
// signature as ClassA (preferred)
var ADAPTED = [new ClassAleph(), new ClassBethAdapter()];
ADAPTED.forEach(function (item) {
    item.methodAleph();
});
