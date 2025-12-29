function rowWeights(array){
    let sumOddIdx = 0
    let sumEvenIdx = 0

    for(let i = 0; i < array.length; i++){
        (i % 2 === 0) ? sumEvenIdx += array[i] : sumOddIdx += array[i]
    }

    return [sumEvenIdx, sumOddIdx]
}

console.log(rowWeights([39,84,74,18,59,72,35,61]))