class GenericsValue<T> {
    value: T;
    constructor(arg: T) {
        this.value = arg;
    }
    getValue(): T {
        return this.value;
    }
}
let genericsValue1 = new GenericsValue<number>(123);
console.log(genericsValue1.getValue());

let genericsValue2 = new GenericsValue<string>("hogehoge");
console.log(genericsValue2.getValue());