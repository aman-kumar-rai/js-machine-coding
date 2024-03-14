function size(collection) {
    if(collection === null || collection === undefined) {
        return 0;
    }
    else if(typeof collection === "string" || Array.isArray(collection)) {
        return collection.length;
    }
    else if(collection instanceof Map || collection instanceof Set) {
        return collection.size;
    }
    else {
        return Object.keys(collection).length;
    }
}


// Arrays.
console.log(size([1, 2, 3, 4, 5])); // => 5
// Object.
console.log(size({ a: 1, b: 2 })); // => 2
// Strings.
console.log(size('peanut')); // => 6
// Sets.
console.log(size(new Set([1, 2, 3]))); // => 3
// Maps.
console.log(size(
  new Map([
    [1, 2],
    [3, 4],
  ]),
)); // => 2
