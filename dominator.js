function dominator(arr) {
    if (arr.length === 0) return -1;
    let counter = {}
   
    for(const x of arr){
        if(!counter[x]) counter[x] = 1
        else counter[x] += 1  
    }
   
    const max = Math.max(...Object.values(counter))
      
    if(max > Math.floor(arr.length / 2)) return +Object.keys(counter).find(k => counter[k] === max)
    else return -1
}