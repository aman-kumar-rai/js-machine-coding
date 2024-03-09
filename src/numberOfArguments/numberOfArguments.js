function numberOfArguments() {
    return arguments.length;
}


console.log(numberOfArguments()); // 0
console.log(numberOfArguments(1)); // 1
console.log(numberOfArguments(1, 2)); // 2
console.log(numberOfArguments(1, 2, 3)); // 3
console.log(numberOfArguments(1, 2, 3, 4)); // 4