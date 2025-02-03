function mergeArrays(a, b) {
  let result = [];
  
  while (a.length > 0 || b.length > 0) {
    if (a.length > 0) result.push(a.shift());
    if (b.length > 0) result.push(b.shift());
  }

  return result;
}
