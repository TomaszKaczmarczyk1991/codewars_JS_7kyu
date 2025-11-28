const sequenceSum = (begin, end, step) => {
  if(begin > end) return 0
  let result = 0
  let current = begin

  while(current <= end){
    result += current
    current += step
  }
  return result
}

console.log(sequenceSum(1,5,3))