function isSortedAndHow(array) {
    const asc = [...array].sort((a, b) => a - b)
    const desc = [...array].sort((a, b) => b - a)

    if (array.every((v, i) => v === asc[i])) return 'yes, ascending'
    if (array.every((v, i) => v === desc[i])) return 'yes, descending'
    return 'no'
}

console.log(isSortedAndHow([1, 2, 3, 4])) //