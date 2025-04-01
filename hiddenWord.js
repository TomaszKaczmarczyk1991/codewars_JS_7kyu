function hiddenWord(num) {
    const key = {
        6 : 'a',
        1 : 'b',
        7 : 'd',
        4 : 'e',
        3 : 'i',
        2 : 'l',
        9 : 'm',
        8 : 'n',
        0 : 'o',
        5 : 't'
    }
    
    return num.toString().split('').map(digit => key[digit] || '').join('');
}

console.log(hiddenWord(74132))