function throttle(func, wait) {
    let timerId = null;

    return function throttledFn(...args) {
        if(timerId === null) {
            func.call(this, ...args);
            timerId = setTimeout(() => {
                clearTimeout(timerId);
                timerId = null;
            }, wait);
        }
    }
}


let i = 0;
const increment = throttle(() => {
  i++;
}, 100);

console.log(i);// 0
increment();
console.log(i);// 1

setTimeout(() => {
    console.log(i);// 1
    increment();
    console.log(i);// 1
}, 50);

setTimeout(() => {
    console.log(i);// 1
    increment();
    console.log(i);// 2
}, 150);

setTimeout(() => {
    console.log(i);// 2
    increment();
    console.log(i);// 2
}, 200);
