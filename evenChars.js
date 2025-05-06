function evenChars(string) {
    if (typeof string !== 'string' || string.length < 2 || string.length > 100) {
      return "invalid string";
    }
  
    return Array.from(string)
                .filter((_, index) => (index + 1) % 2 === 0);
  }

console.log(evenChars(";;;--")) // ["b", "d", "f", "h", "j", "l"]