function sortList(sortBy, list) { 
    const arr = [...list]
    if(arr.length === 0) return []
    return arr.sort((a,b) => b[sortBy] - a[sortBy])
}