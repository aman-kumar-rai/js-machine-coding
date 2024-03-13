function uniqueArray(array) {
    const valuesSet = new Set(), retArray = [];
    for(const item of array) {
        if(!valuesSet.has(item)) {
            valuesSet.add(item)
            retArray.push(item);
        }
    }

    return retArray;
}


console.log(uniqueArray([1, 2, 3])); // [1, 2, 3]
console.log(uniqueArray([1, 1, 2])); // [1, 2]
console.log(uniqueArray([2, 1, 2])); // [2, 1]
