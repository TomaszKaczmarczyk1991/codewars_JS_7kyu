function nicknameGenerator(name){
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if(name.length < 4) return "Error: Name too short";
    return (vowels.includes(name[2])) ? [...name].toSpliced(4).join('') : [...name].toSpliced(3).join('');
  }

console.log(nicknameGenerator('Gregory')) // Greg