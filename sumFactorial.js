function sumFactorial(arr){
  const factorials = []

  for(let num of arr){
    let factorial = 1
    let n = num

    while(n > 1){
      factorial *= n
      n--
    }

    factorials.push(factorial)
  }

  return factorials.reduce((acc, val) => acc + val, 0)
}