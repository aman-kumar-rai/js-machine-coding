function findLastIndex(array, predicate, fromIndex) {

    // handling default value
    if(fromIndex === undefined) {
        fromIndex = array.length - 1
    }

    if(fromIndex > 0) {
        fromIndex = Math.min(fromIndex, array.length - 1);
    }
    else {
        fromIndex = Math.max(0, fromIndex + array.length);
    }
    
    for(let i=fromIndex; i>=0; i--) {
        if(predicate(array[i], i, array)) {
            return i;
        }
    }

    return -1;
}



const arr = [5, 4, 3, 2, 1];

// Search for the last value in the array that is greater than 3 and return the index.
findLastIndex(arr, (num) => num > 3); // => 1

// Start searching from index 3 (inclusive).
findLastIndex(arr, (num) => num > 1, 3); // => 3

// Start searching from index 3 (inclusive).
findLastIndex(arr, (num) => num < 1, 3); // => -1