function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"]
  let count = 0
  
  for(const char of str){
    if(vowels.includes(char)) count++
  }
  return count
}