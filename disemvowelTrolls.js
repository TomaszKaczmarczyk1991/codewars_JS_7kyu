function disemvowel(str) {
  const word = [...str];
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const result = word.filter((char) => !vowels.includes(char.toLowerCase())).join('');

  return result;
}