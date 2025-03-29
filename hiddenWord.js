function hiddenWord(num) {
    const numStr = num.toString();
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
    
    const result = [];

    for(let i = 0; i < numStr.length; i++){
        if(key[numStr[i]]) result.push(key[Number(numStr[i])]);
    }
   return result.join('');
}

console.log(hiddenWord(74132))