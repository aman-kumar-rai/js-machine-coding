function once(func) {
    let isInvoked = false, result = undefined;

    return function funcOnce(...args) {
        if(isInvoked === false) {
            result = func.call(this,...args);
            isInvoked = true;
            return result;
        }
        else {
            return result;
        }
    }
}


let i = 1;

function incrementBy(value) {
  i += value;
  return i;
}

const incrementByOnce = once(incrementBy);
console.log(incrementByOnce(2)); // i is now 3; The function returns 3.
console.log(incrementByOnce(3)); // i is still 3; The function returns the result of the first invocation, which is 3.
i = 4;
console.log(incrementByOnce(2)); // i is still 4 as it is not modified. The function returns the result of the first invocation, which is 3.
