class Arith {
  constructor(word) {
    this.wordsToNumbers = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      fourteen: 14,
      fifteen: 15,
      sixteen: 16,
      seventeen: 17,
      eighteen: 18,
      nineteen: 19,
      twenty: 20
    };

    this.numbersToWords = Object.entries(this.wordsToNumbers)
      .reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
      }, {});

    this.value = this.wordsToNumbers[word.toLowerCase()];
  }

  add(word) {
    const num = this.wordsToNumbers[word.toLowerCase()];
    const result = this.value + num;
    return this.numbersToWords[result];
  }
}
