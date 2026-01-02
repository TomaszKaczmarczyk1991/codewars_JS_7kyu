function mxdiflg(a1, a2) {
    if(a1.length === 0 || a2.length === 0) return -1

    const max1 = Math.max(...a1.map(x => x.length))
    const min1 = Math.min(...a1.map(x => x.length))

    const max2 = Math.max(...a2.map(x => x.length))
    const min2 = Math.min(...a2.map(x => x.length))

    const diff1 = max1 - min2
    const diff2 = max2 - min1

    return (diff1 > diff2) ? diff1 : diff2
}

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))