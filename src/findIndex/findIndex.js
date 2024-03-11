function findIndex(array, predicate, fromIndex = 0) {
    
    if(fromIndex < 0) {
        fromIndex = fromIndex + array.length;
    }

    for(let i = fromIndex; i<array.length; i++) {
        if(predicate(array[i], i, array)) {
            return i;
        }
    }

    return -1;

}


const arr = [1, 2, 3, 4, 5];

// Search for the first value in the array that is greater than 3.
findIndex(arr, (num) => num > 3); // => 3

// Start searching from index 3 (inclusive).
findIndex(arr, (num) => num > 3, 4); // => 4

// No such element exists.
findIndex(arr, (num) => num > 10, 3); // => -1