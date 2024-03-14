function limit(func, n) {
    let callCount = 0, lastResult;

    return function limitFunc(...args) {
        if(callCount < n) {
            callCount++;
            lastResult = func.call(this, ...args);
            return lastResult;
        }
        else {
            return lastResult;
        }

    }
}


let i = 1;

function incrementBy(value) {
  i += value;
  return i;
}

const incrementByAtMostThrice = limit(incrementBy, 3);
console.log(incrementByAtMostThrice(2)); // i is now 3; The function returns 3.
console.log(incrementByAtMostThrice(3)); // i is now 6; The function returns 6.
console.log(incrementByAtMostThrice(4)); // i is now 10; The function returns 10.
console.log(incrementByAtMostThrice(5)); // i is still 10 as this is the 4th invocation; The function returns 10 as it's the result of the last invocation.
i = 4;
console.log(incrementByAtMostThrice(2)); // i is still 4 as it is not modified. The function still returns 10.
