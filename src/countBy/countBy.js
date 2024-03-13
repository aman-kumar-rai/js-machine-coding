function countBy(array, iteratee) {
    const countMap = {};

    for(const item of array) {
        let result;
        if(typeof iteratee === "string") {
            result = item[iteratee];
        }
        else {
            result = iteratee(item);
        }
        if(countMap.hasOwnProperty(result)) {
            countMap[result] += 1;
        }
        else {
            countMap[result] = 1;
        }
    }

    return countMap;
}



console.log(countBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': 1, '6': 2 }

console.log(countBy(['one', 'two', 'three'], 'length'));
// => { '3': 2, '5': 1 }
