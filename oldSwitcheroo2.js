function encode(str) {
  const string = str.toLowerCase();
  const result = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (/[^a-z0-9]/.test(char)) {
      result.push(char);
    } else if (/[a-z]/.test(char)) {
      result.push(char.charCodeAt(0) - 96);
    } else {
      result.push(char);
    }
  }
  return result.join('');
}