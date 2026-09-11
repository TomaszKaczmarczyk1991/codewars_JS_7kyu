function findDeletedNumber(arr, mixArr) {
  for(let x of arr){
      if(!mixArr.includes(x)) return x
  }
  return 0
}