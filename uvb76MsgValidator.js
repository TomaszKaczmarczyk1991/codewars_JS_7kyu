function validate(message) {
    const msg = message.split(' ');
    if (
      msg.length === 8 &&
      msg[0] === 'MDZHB' &&
      typeof msg[3] === 'string' &&
      msg[3].length > 0 &&
      [...msg[3]].every(char => char >= 'A' && char <= 'Z') &&
      !isNaN(msg[1]) && msg[1].length === 2 &&
      !isNaN(msg[2]) && msg[2].length === 3 &&
      !isNaN(msg[4]) && msg[4].length === 2 &&
      !isNaN(msg[5]) && msg[5].length === 2 &&
      !isNaN(msg[6]) && msg[6].length === 2 &&
      !isNaN(msg[7]) && msg[7].length === 2
    ) {
      return true;
    }
    return false;
}

console.log(validate('MDZHB 01 213 SKIF 38 87 23 95')) // true