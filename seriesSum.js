function SeriesSum(n) {
    if(n === 0) return "0.00"

    const series = [1]
    let divider = 4
    for(let i = 0; i < n - 1; i++) {
        series.push(1/divider)
        divider += 3
    }

    return series
        .reduce((acc, val) => acc + val, 0)
        .toFixed(2);
}

console.log(SeriesSum(3)) // 1.39