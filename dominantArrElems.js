function solve(arr) {
    const result = [];
    let max = -Infinity;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > max) {
            result.push(arr[i]);
            max = arr[i];
        }
    }
    return result.reverse();
}

console.log(solve([1, 21, 4, 7, 5]));
