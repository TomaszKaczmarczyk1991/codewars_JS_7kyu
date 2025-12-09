var number=function(array){
  const result = []
  for(let i = 0; i < array.length; i++){
      result.push(`${i+1}: ${array[i]}`)
  }
  return result
}