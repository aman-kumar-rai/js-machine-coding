function compose(...fns) {
    if(fns.length === 0) {
        return function identity(value) {
            return value;
        }
    }
    else {
        return function composeFn(value) {
            let acc = value;
            for(let i=fns.length - 1; i>=0; i--) {
                acc = fns[i](acc);
            }
            return acc;
        }
    }
}


const add1 = (num) => num + 1;
const double = (num) => num * 2;
const subtract10 = (num) => num - 10;

const composedFn = compose(subtract10, double, add1);
console.log(composedFn(3)); // (3 + 1) * 2 - 10 => -2
