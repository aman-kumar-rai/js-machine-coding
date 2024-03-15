function curry(func) {

    return function curriedFunc(...args) {
        const context = this;
        if(args.length >= func.length) {
            return func.call(this, ...args);
        }
        else {
            return function intermediateCurriedFunc(arg) {
                if(arg === undefined) {
                    return curriedFunc.call(context, ...args);
                }
                else {
                    return curriedFunc.call(context, ...args, arg);
                }
            }
        }
    }
}


function multiplyThreeNumbers(a, b, c) {
    return a * b * c;
}

const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers);
console.log(curriedMultiplyThreeNumbers(4, 5, 6));
console.log(curriedMultiplyThreeNumbers(4)(5)(6)); // 120

const containsFour = curriedMultiplyThreeNumbers(4);
const containsFourMulFive = containsFour(5);
console.log(containsFourMulFive(6)); // 120
  