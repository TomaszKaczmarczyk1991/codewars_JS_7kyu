function seqToOne(n) {
  const seq = []

  if (n >= 1) {
    while (n >= 1) {
      seq.push(n)
      n--
    }
  } else {
    while (n <= 1) {
      seq.push(n)
      n++
    }
  }

  return seq
}

console.log(seqToOne(5)) // [ 5, 4, 3, 2, 1 ]