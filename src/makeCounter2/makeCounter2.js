function makeCounter2(initialValue = 0) {
    let value = initialValue;

    return {
        get: function get() {
            return value;
        },
        increment: function increment() {
            return ++value;
        },
        decrement: function decrement() {
            return --value;
        },
        reset: function reset() {
            value = initialValue;
            return value;
        }
    }
}

const counter = makeCounter2();
console.log(counter.get()); // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.get()); // 2
console.log(counter.reset()); // 0
console.log(counter.decrement()); // -1


const counter1 = makeCounter2(5);
console.log(counter1.get()); // 5
console.log(counter1.decrement()); // 4
console.log(counter1.decrement()); // 3
console.log(counter1.get()); // 3
console.log(counter1.reset()); // 5
console.log(counter1.increment()); // 6