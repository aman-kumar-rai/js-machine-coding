function fromPairs(pairs) {
    const obj = {};
    for(const pair of pairs) {
        const [key, value] = pair;
        obj[key] = value;
    }
    return obj;
}


const pairs = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
];
  
console.log(fromPairs(pairs)); // => { a: 1, b: 2, c: 3 }