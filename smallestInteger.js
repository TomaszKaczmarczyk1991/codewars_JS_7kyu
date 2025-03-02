function smallestInteger(matrix) {
    const myArr = matrix.flat().filter(x => x >= 0).sort((a, b) => a - b);
    let result = 0;

    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] === result) {
            result++;
        }
    }
    return result;
}