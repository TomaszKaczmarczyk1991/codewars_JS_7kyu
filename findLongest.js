function findLongest(array){
    let maxLen = 0
    let result
    
    for(let x of array){
        if(x.toString().length > maxLen){
            maxLen = x.toString().length
            result = x
        }

    }
    return result
}

console.log(findLongest([8000, 8, 800, 9000]))