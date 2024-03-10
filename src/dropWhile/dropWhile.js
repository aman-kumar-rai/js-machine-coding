function dropWhile(array, predicate) {
    let startIndex = array.length;
    const arr = [];
    for(let i=0; i<array.length - 1; i++) {
        if(predicate(array[i], i, array) === false) {
            startIndex = i;
            break;
        }
    }

    for(let i=startIndex; i<array.length ; i++) {
        arr.push(array[i]);
    }

    return arr;
}

console.log(dropWhile([1, 2, 3, 4, 5], (value) => value < 3)); // => [3, 4, 5]
console.log(dropWhile([1, 2, 3], (value) => value < 6)); // => []