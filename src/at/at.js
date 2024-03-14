Array.prototype.at = function at(index) {
    if(index >= this.length || index < -this.length) {
        return undefined;
    }
    index = index >=0? index: index + this.length;
    return this[index];
}


const arr = [42, 79];
console.log(arr.at(0)); // 42
console.log(arr.at(1)); // 79
console.log(arr.at(2)); // undefined

console.log(arr.at(-1)); // 79
console.log(arr.at(-2)); // 42
console.log(arr.at(-3)); // undefined
