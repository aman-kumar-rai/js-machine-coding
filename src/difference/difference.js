function difference(array, values) {
    const valuesSet = new Set(values);
    const diffValues = [];

    array.forEach(item => {
        if(!valuesSet.has(item)) {
            diffValues.push(item);
        }
    });

    return diffValues;
}


console.log(difference([1, 2, 3], [2, 3])); // => [1]
console.log(difference([1, 2, 3, 4], [2, 3, 1])); // => [4]
console.log(difference([1, 2, 3], [2, 3, 1, 4])); // => []
console.log(difference([1, , 3], [1])); // => [3]