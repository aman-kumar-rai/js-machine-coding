function binarySearch(arr, target) {
    let start = 0, end = arr.length - 1;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === target) {
            return mid;
        }
        else if(arr[mid] > target) {
            end = mid -1 ;
        }
        else {
            start = mid + 1
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 6, 9, 11], 6)); // 3
console.log(binarySearch([1, 2, 3, 12, 16, 14], 5)); // -1
