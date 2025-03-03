function arrayChange(arr) {
    let moves = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            moves += arr[i - 1] - arr[i] + 1;
            arr[i] = arr[i - 1] + 1;
        }
    }
    return moves;
}

const arr = [1, 1, 1];
console.log(arrayChange(arr));  // 3