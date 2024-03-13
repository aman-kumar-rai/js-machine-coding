function cycle(...values) {
    let i=0;

    return function getNextValue() {
        const value = values[i];
        i = (i+1) % values.length;
        return value;
    }
}


const helloFn = cycle('hello');
console.log(helloFn()); // "hello"
console.log(helloFn()); // "hello"

const onOffFn = cycle('on', 'off');
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn()); // "on"
