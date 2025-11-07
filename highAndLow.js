function highAndLow(numbers){
  const arr = [...numbers.split(" ")]
  const nums = arr.map((x) => +x)
  
  return `${Math.max(...nums)} ${Math.min(...nums)}`
}