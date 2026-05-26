const capitals = (word) => {
	 const uppercased = word.toUpperCase()
	 const result = []
	 
	 for(let i = 0; i < word.length; i++){
	     if(word[i] === uppercased[i]) result.push(i)
	 }
	 return result
}