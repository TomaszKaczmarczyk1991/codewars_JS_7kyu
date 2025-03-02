function sumDigits(number) {
    const strNum = Math.abs(number).toString();
    let result = 0;

    for (let digit of strNum){
        result += parseInt(digit);
    }
    return result;
}