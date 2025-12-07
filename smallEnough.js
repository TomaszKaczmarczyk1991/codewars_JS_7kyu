function smallEnough(a, limit){
    return a.every(val => val <= limit)
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)) // false