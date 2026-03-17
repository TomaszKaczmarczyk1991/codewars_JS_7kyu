function mergeStrings(first, second){
    const maxOverlap = Math.min(first.length, second.length)

    for(let i = maxOverlap; i > 0; i--){
        const endOfSecond = first.slice(-i)
        const startOfFirst = second.slice(0, i)

        if (endOfSecond === startOfFirst) return first + second.slice(i);
    }
    return first + second
}

console.log(mergeStrings("abcde", "cdefgh")) // abcdefgh