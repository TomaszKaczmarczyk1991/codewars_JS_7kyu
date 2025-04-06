function solve(arr){
    const result = [];

    while(arr.length > 0) {
        result.push(arr.splice(arr.indexOf(Math.max(...arr)), 1))
        result.push(arr.splice(arr.indexOf(Math.min(...arr)), 1))
    }
    return result.flat();
};

console.log(solve([15,11,10,7,12])); // [ 15, 7, 12, 10, 11 ]