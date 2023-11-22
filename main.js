var GenericsValue = /** @class */ (function () {
    function GenericsValue(arg) {
        this.value = arg;
    }
    GenericsValue.prototype.getValue = function () {
        return this.value;
    };
    return GenericsValue;
}());
var genericsValue1 = new GenericsValue(123);
console.log(genericsValue1.getValue());
var genericsValue2 = new GenericsValue("hogehoge");
console.log(genericsValue2.getValue());
