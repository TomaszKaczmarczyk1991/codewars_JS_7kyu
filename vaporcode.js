function vaporcode(string) {
  const str = [...string.toUpperCase()];
  
  return str.filter(char => char !== ' ').join('  ');
}

//test