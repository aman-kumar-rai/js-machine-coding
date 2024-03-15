function curry(func) {

    return function curriedFunc(...args) {
        if(args.length >= func.length) {
            return func.call(this, ...args);
        }
        else {

            const intermediateCurriedFunc = (...argList) => {
                if(argList.length === 0) {
                    return curriedFunc.call(this, ...args);
                }
                else {
                    return curriedFunc.call(this, ...args, ...argList)
                }
            }

            return intermediateCurriedFunc;
        }
    }
}



function addTwo(a, b) {
    return a + b;
}

const curriedAddTwo = curry(addTwo);
console.log(curriedAddTwo(3)(4)); // 7
console.log(curriedAddTwo(3, 4)); // 7
const alreadyAddedThree = curriedAddTwo(3);
console.log(alreadyAddedThree(4)); // 7
  

function multiplyThree(a, b, c) {
    return a * b * c;
}

const curriedMultiplyThree = curry(multiplyThree);
console.log(curriedMultiplyThree(4)(5)(6)); // 120
console.log(curriedMultiplyThree(4)(5, 6)); // 120
console.log(curriedMultiplyThree(4, 5)(6)); // 120
console.log(curriedMultiplyThree(4, 5, 6)); // 120

const containsFour = curriedMultiplyThree(4);
const containsFourMulFive = containsFour(5);
console.log(containsFourMulFive(6)); // 120
  