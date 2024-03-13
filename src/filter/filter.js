Array.prototype.filter = function filter(callback, thisArg) {
    const arr = [];

    for(let i=0; i<this.length; i++) {
        if(callback.call(thisArg, this[i], i, this)) {
            arr.push(this[i]);
        }
    }

    return arr;
}


console.log([1, 2, 3, 4].filter((value) => value % 2 == 0)); // [2, 4]
console.log([1, 2, 3, 4].filter((value) => value < 3)); // [1, 2]
