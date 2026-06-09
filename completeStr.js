const complete = str => {
  if (str.length === 1) return str + str

  for (let i = 1; i < str.length; i++) {
    const candidate =
      str + str.slice(0, i).split('').reverse().join('')

    if (candidate === candidate.split('').reverse().join('')) {
      return candidate
    }
  }
}