function debounce(func, wait) {
    let timerId = null;

    return function debouncedFn(...args) {
        if(timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => func.call(this, ...args), wait);
    }
}

// here, this of debounced funtion is used at time of invocation


let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.
//  Call debouncedIncrement() again.
debouncedIncrement(); // i = 0

// t = 100: i is still 0 because it has only
//  been 50ms since the last debouncedIncrement() at t = 50.

// t = 150: Because 100ms have passed since
//  the last debouncedIncrement() at t = 50,
//  increment was invoked and i is now 1 .
