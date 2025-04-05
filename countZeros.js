function countZeros(n) {
    if(n < 1) return 'n must be higher than 1'
    let counter = 0;

    for(let i = 1; i <= n; i++) {
        let str = i.toString();

        for(const char of str) {
            if(char === '0') counter++;
        }
    }
    return counter;
}

console.log(countZeros(100));