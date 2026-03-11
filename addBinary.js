function addBinary(a,b) {
  let sum = +a + +b
  const binary = []
  
  if(sum === 0) return "0"
  
  while(sum > 0){
    binary.push(sum % 2)
    sum = Math.floor(sum / 2)
  }
  
  return binary.reverse().join('')
}