# Make Counter

Implement a function `makeCounter` that returns a function, which when called gives the initial value passed first(0 if no initial value is passed), and then the next number of every subsequent call.

### Arguments
1. `initialValue(number)`: The initial value for count

### Returns
`(function)`: function to invoke to get incrementing value of count on each call.


### Examples
`

    const getNext1 = makeCounter();
    console.log(getNext1()); // 0
    console.log(getNext1()); // 1
    console.log(getNext1()); // 2

    const getNext2 = makeCounter(-2);
    console.log(getNext2()); // -2
    console.log(getNext2()); // -1
    console.log(getNext2()); // 0
    
`