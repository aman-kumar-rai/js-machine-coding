function curry(func) {
    return function curriedFunc(...args) {

        const fn = curriedFunc.bind(this, ...args);

        fn[Symbol.toPrimitive] = () => {
            return func.call(this, ...args);
        }

        return fn;
    }
}

function multiply(...numbers) {
    return numbers.reduce((a, b) => a * b, 1);
}

const curriedMultiply = curry(multiply);
const multiplyByThree = curriedMultiply(3);
console.log(multiplyByThree); // 3
console.log(multiplyByThree(4)); // 12

const multiplyByFifteen = multiplyByThree(5);
console.log(multiplyByFifteen); // 15
console.log(multiplyByFifteen(2)); // 30

console.log(curriedMultiply(1)(2)(3)(4)); // 24
console.log(curriedMultiply(1, 2, 3, 4)); // 24