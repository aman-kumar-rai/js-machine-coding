function setCancellableInterval(callback, delay, ...args) {
    const intervalId = setInterval(callback, delay, ...args);

    return function cancelInterval() {
        clearInterval(intervalId);
    }
}


const cancel = setCancellableInterval(() => {
    console.log("Hello")
}, 100);

setTimeout(cancel, 500);