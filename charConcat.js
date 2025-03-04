function charConcat(string) {
  let str = [...string]; 
  let result = [];
  let counter = 0;

  if (str.length % 2 !== 0) {
    str.splice(Math.floor(str.length / 2), 1);
  }

  for (let i = 0; i < str.length / 2; i++) {
    counter++;
    result.push(str[i], str[str.length - 1 - i], counter);
  }
  return result.join("");
}