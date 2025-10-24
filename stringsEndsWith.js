function solution(str, ending){
    if (ending === "") return true;
    const len = ending.length
    const firstPart = str.slice(0, -len)

    return str === firstPart + ending
}

console.log(solution("test", "st"))