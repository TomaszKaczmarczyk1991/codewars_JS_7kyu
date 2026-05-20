function pairs(ar){
    let count = 0
    for(let i = 0; i < ar.length - 1; i+=2){
        if((ar[i] + 1 === ar[i+1]) || (ar[i] - 1 === ar[i+1])) count++
    }
    return count
}