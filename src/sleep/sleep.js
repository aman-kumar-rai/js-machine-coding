function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time)
    })
}


async function greet(name) {
    console.log("Hi");
    await sleep(1000);
    console.log(name);
}

greet("aman");