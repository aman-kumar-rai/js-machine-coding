// setting this to the object itself in this case, better document this

function objectMap(obj, fn) {
    const mappedObj = {};
    for(const key of Object.keys(obj)) {
        mappedObj[key] = fn.call(obj, obj[key]);
    }
    return mappedObj;
}



const double = (x) => x * 2;
console.log(objectMap({ foo: 1, bar: 2 }, double)); // => { foo: 2, bar: 4}