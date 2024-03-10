function setCancellableTimeout(callback, delay, ...args) {
    const timerId = setTimeout(callback, delay, ...args);

    return function cancel() {
        clearTimeout(timerId);
    }
}


const cancel = setCancellableTimeout(() => {
    console.log("It won't run")
}, 500);

cancel();