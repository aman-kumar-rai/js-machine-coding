function isArray(value) {
    return Array.isArray(value);
}

function isFunction(value) {
    return typeof value === "function";
}

function isObject(value) {
    if(value === null) {
        return false;
    }
    else {
        return typeof value === "object" || typeof value === "function";
    }

}

function isPlainObject(value) {
    if(value === null || typeof value !== "object") {
        return false;
    }
    else {
        const prototype = Object.getPrototypeOf(value);
        return (typeof value === "object") && (prototype === null || prototype === Object.prototype);
    }
}
