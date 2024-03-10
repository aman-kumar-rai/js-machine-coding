function chunk(array, size = 1) {
    const chunks = [];
    let currentChunk = [];
    for(let i=0; i<array.length; i++) {
        if(currentChunk.length < size) {
            currentChunk.push(array[i]);
        }
        else {
            chunks.push(currentChunk);
            currentChunk = [array[i]];
        }
    }

    if(currentChunk.length !== 0) {
        chunks.push(currentChunk);
    }

    return chunks;
}

console.log(chunk(['aman', 'kumar', 'rai']));
console.log(chunk([1, 2, 3, 4], 1));
console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4], 3));
console.log(chunk([1, 2, 3, 4], 4));