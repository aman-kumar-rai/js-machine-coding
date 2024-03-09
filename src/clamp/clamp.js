function clamp(value, lower, upper) {
    return value <= lower? lower: (value >= upper? upper: value);
}


console.log(clamp(3, 0, 5)); // 3
console.log(clamp(-10, -3, 5)); // -3
console.log(clamp(10, -5, 5)); // 5