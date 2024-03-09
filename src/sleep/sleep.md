# Sleep

Implement a function `sleep` which would suspend the execution of current function for specified time. 

### Arguments
1. `time(number)`: time for which execution has to be suspended

### Returns
Return depends on implementation, but won't be consumed directly at the calling site


### Examples
`

    async function greet(name) {
        console.log("Hi");
        await sleep(1000);
        console.log(name);
    }

    greet("aman");
    // Logs "Hi", and then "aman" after roughly 1000 ms
`