# Number of Arguments

Implement a function `numberOfArguments` that returns the number of arguments it was called with. Note, that it is different from the number of parameters the function was defined with.

### Arguments
The function doesn't expect any argument, it can be called with as many as needed for testing purpose.

### Returns
`(number)`: number of arguments the function was called with.


### Examples
`

    console.log(numberOfArguments()); // 0
    console.log(numberOfArguments(1)); // 1
    console.log(numberOfArguments(1, 2)); // 2
    console.log(numberOfArguments(1, 2, 3)); // 3
    console.log(numberOfArguments(1, 2, 3, 4)); // 4
    
`

### Resources
[arguments.length | MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length)