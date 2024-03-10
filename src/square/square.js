Array.prototype.square = function square() {
    const arr = [];
    for(let i=0; i<this.length; i++) {
        arr.push(this[i] * this[i])
    }
    return arr;
}

console.log([-2].square());
console.log([3, 4, 4].square());