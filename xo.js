function XO(str) {
    const xCounter = [...str.toLowerCase()].filter(ch => ch === 'x').length;
    const oCounter = [...str.toLowerCase()].filter(ch => ch === 'o').length;
    return xCounter === oCounter;
}

console.log(XO("xxxxxxxooo")) // false
console.log(XO("ooXx")) // true