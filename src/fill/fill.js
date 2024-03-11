function fill(array, value, start = 0, end) {
 
    if(end === undefined) {
        end = array.length;
    }

    start = start >= 0? Math.min(start, array.length): Math.max(0, start + array.length);
    end = end >= 0? Math.min(end, array.length): Math.max(0, end + array.length);


    for(let i=start; i<end; i++) {
        array[i] = value;
    }

    return array;
}

console.log(fill([], "*"))
console.log(fill([1, 2, 3], 'a')); // ['a', 'a', 'a']
console.log(fill([4, 6, 8, 10], '*', 1, 3)); // [4, '*', '*', 10]
console.log(fill([4, 6, 8, 10, 12], '*', -3, -1)); // [4, 6, '*', '*', 12]