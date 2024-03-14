Array.prototype.reduce = function reduce(callback, initialValue) {
    let startIndex, accumulator;
    if(initialValue === undefined) {
        if(this.length === 0) {
            throw new Error("No initial value specified for an empty array")
        }
        accumulator = this[0];
        startIndex=1;
    }
    else {
        accumulator = initialValue;
        startIndex = 0;
    }

    for(let i=startIndex; i<this.length; i++) {
        if(this.hasOwnProperty(i)) {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }

    return accumulator;
}


console.log([1, 2, 3].reduce((prev, curr) => prev + curr, 0)); // 6
console.log([1, 2, 3].reduce((prev, curr) => prev + curr, 4)); // 10
