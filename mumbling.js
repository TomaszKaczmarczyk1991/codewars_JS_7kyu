function accum(s) {
	const elems = []

    for(let i = 0; i < s.length; i++){
        elems.push(s[i].toUpperCase())  
        if(i > 0){
            elems.push(s[i].toLowerCase().repeat(i))
        } 
        if(i < s.length - 1) elems.push('-')
    }
    return elems.join('');
}

console.log(accum("abcd")) // "A-Bb-Ccc-Dddd"
