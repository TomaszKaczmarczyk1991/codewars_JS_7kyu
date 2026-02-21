function findLongest(array){
    if(array.length === 0) return null

    let maxLen = 0
    let result = array[0]

    for(let x of array){
        const len = String(x).length
        if(len > maxLen){
            maxLen = len
            result = x
        }
    }
    return result
}

console.log(findLongest([8000, 8, 800, 9000]))