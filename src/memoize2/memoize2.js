function memoize(func) {
    const results = new Map();

    return function memoizedFn(...args) {
        const key = JSON.stringify(args);

        if(results.has(key)) {
            return results.get(key);
        }
        else {
            const result = func.call(this, ...args);
            results.set(key, result);
            return result;
        }
    }
}


function expensiveMul(a, b) {
    console.log('Computing...');
    return a * b;
}

// Create a memoized version of the function.
const memoizedExpensiveMul = memoize(expensiveMul);

// First call (computes and caches the result).
console.log(memoizedExpensiveMul(3, 7)); // Output: Computing... 21

// Second call with the same argument (returns the cached result).
console.log(memoizedExpensiveMul(3, 7)); // Output: 21

// Third call with a different argument (computes and caches the new result).
console.log(memoizedExpensiveMul(5, 8)); // Output: Computing... 40

// Fourth call with the same argument as the third call (returns the cached result).
console.log(memoizedExpensiveMul(5, 8)); // Output: 40
  