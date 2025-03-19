function reduce(fraction) {
  let a = fraction[0];
  let b = fraction[1];
  
  while(b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return [fraction[0] / a, fraction[1] / a]; 
}