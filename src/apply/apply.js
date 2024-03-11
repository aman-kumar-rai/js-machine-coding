Function.prototype.apply = function apply(thisArg, args = []) {
    const symbol = Symbol();
    const wrapperObj = Object(thisArg);

    Object.defineProperty(wrapperObj, symbol, {
        enumerable: false,
        value: this
    });

    return wrapperObj[symbol] (...args);
}



function multiplyAge(multiplier = 1) {
    return this.age * multiplier;
}
  
const mary = {
    age: 21,
};

const john = {
    age: 42,
};
  
multiplyAge.apply(mary); // 21
multiplyAge.apply(john, [2]); // 84