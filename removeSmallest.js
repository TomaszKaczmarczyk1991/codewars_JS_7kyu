function removeSmallest(numbers) {
  const result = []
  const min = Math.min(...numbers)
  let isRemoved = false
  
  for(let i = 0; i < numbers.length; i++){
   if(numbers[i] === min && isRemoved === false){
     isRemoved = true
     continue
   }
   result.push(numbers[i])
  }
  return result
}