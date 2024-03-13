function debounce2(func, wait) {
    let timerId = null, lastArgs = [], context = undefined;

    function debouncedFn(...args) {
        if(timerId !== null) {
            clearTimeout(timerId);
            timerId = null;
        }

        lastArgs = args;
        context = this;
        timerId = setTimeout(() => {
            timerId = null;
            func.call(context,...lastArgs);
        }, wait);
    }

    debouncedFn.cancel = function cancel() {
        if(timerId !== null) {
            clearTimeout(timerId);
            timerId = null;
            lastArgs = []
        }
    }

    debouncedFn.flush = function flush() {
        if(timerId !== null) {
            func.call(context, ...lastArgs);
            clearTimeout(timerId);
            timerId = null;
            lastArgs = [];
        }
    }

    return debouncedFn;
}



let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce2(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0

// t = 50: i is still 0 because 100ms have not passed.
// t = 51:
debouncedIncrement.flush(); // i is now 1 because flush causes() the callback to be immediately invoked.

// t = 100: i is already 1. The callback has been called before
// and won't be called again.