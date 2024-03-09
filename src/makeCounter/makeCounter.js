function makeCounter(initialValue) {
    let count = initialValue || 0;

    return function getNext() {
        return count++;
    }
}

const getNext1 = makeCounter();
console.log(getNext1()); // 0
console.log(getNext1()); // 1
console.log(getNext1()); // 2

const getNext2 = makeCounter(-2);
console.log(getNext2()); // -2
console.log(getNext2()); // -1
console.log(getNext2()); // 0