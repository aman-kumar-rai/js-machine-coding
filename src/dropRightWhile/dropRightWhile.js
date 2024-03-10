function dropRightWhile(array, predicate) {
    let endIndex = -1;
    const arr = [];
    for(let i=array.length - 1; i>=0; i--) {
        if(predicate(array[i], i, array) === false) {
            endIndex = i;
            break;
        }
    }

    for(let i=0; i<=endIndex; i++) {
        arr[i] = array[i];
    }

    return arr;
}


console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 3)); // => [1, 2, 3]
console.log(dropRightWhile([1, 2, 3], (value) => value < 6)); // => []
console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 6)); // => [1, 2, 3, 4, 5]
