function productArray(numbers){
  const result = [];
  for(let i = 0; i < numbers.length; i++){
  let product = 1;
    for(let j = 0; j < numbers.length; j++){
      if(j !== i) product = numbers[j]*product;
    }
    result.push(product)
  }
  return result;
}