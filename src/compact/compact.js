function compact(array) {
    const arr = [];
    for(let i=0; i<array.length; i++) {
        if(array[i]) {
            arr.push(array[i]);
        }
    }
    return arr;
}

console.log(compact([0, 1, false, 2, '', 3, null])); // => [1, 2, 3]
console.log(compact(['hello', 123, [], {}, function () {}])); // => ['hello', 123, [], {}, function() {}]