// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

const isSquare = (n) => {
    if (n < 0) return false;
    const sqrtN = Math.sqrt(n);
    return Number.isInteger(sqrtN);
  }

  console.log(isSquare(15))