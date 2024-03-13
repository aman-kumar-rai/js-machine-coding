/* note: this doesn't check for array like data structures where a key
[Symbol.isConcatSpreadable]: true exists, actual implementation checks
that as well.
*/

Array.prototype.concat = function concat(...args) {
    const retArray = [...this];

    for(const item of args) {
        if(Array.isArray(item)) {
            for(const subItem of item) {
                retArray.push(subItem);
            }
        }
        else {
            retArray.push(item);
        }
    }

    return retArray;
}



console.log([1, 2, 3].concat([4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log([1, 2, 3].concat(4, 5, 6)); // [1, 2, 3, 4, 5, 6]
console.log([1, 2, 3].concat(4, [5, 6])); // [1, 2, 3, 4, 5, 6]
