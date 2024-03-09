# Function Length

Implement a function `functionLength` to return the number of parameters a function expects. This depends on the function definition, and tells how many parameters does the function define.

### Arguments
1. `fn(function)`: function whose parameters count is to be returned

### Returns
`(number)`: Number of parameters defined in function definition


### Examples
`
    function greet() {}
    function greetPerson(name) {}

    functionLength(greet); // 0
    functionLength(greetPerson); // 1
`


### Resources
[Function: length | MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length)