function rowSumOddNumbers(n) {
  const nRowNums = []
  let num = n * (n - 1) + 1
  let result = 0
 
  for(let i = 0; i < n; i++){
    result += num
    num += 2
  }
  return result
}