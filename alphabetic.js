function alphabetic(s) {
  return s === [...s].sort().join('');
}

console.log(alphabetic('abcdef')); // true