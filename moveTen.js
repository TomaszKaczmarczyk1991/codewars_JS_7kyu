function moveTen(s) {
    return s.split('').map(char => {

      if (char >= 'a' && char <= 'z') {
        return String.fromCharCode((char.charCodeAt(0) - 97 + 10) % 26 + 97);
      }
      if (char >= 'A' && char <= 'Z') {
        return String.fromCharCode((char.charCodeAt(0) - 65 + 10) % 26 + 65);
      }
      return char;
    }).join('');
}
  
console.log(moveTen('Test'));