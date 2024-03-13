Array.prototype.map = function map(callback, thisArg) {
    const arr = new Array(this.length);

    for(let i=0; i<this.length; i++) {
        if(this.hasOwnProperty(i)) {
            arr[i] = callback.call(thisArg, this[i], i, this);
        }
    }

    return arr;
}


console.log([1, 2, 3, 4].myMap((i) => i)); // [1, 2, 3, 4]
console.log([1, 2, 3, 4].myMap((i) => i * i)); // [1, 4, 9, 16]
