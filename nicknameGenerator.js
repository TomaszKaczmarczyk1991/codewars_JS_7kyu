function nicknameGenerator(name){
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if(name.length < 4) return "Error: Name too short";
    return (vowels.includes(name[2])) ? [name[0], name[1], name[2], name[3]].join('') : [name[0], name[1], name[2]].join('');
  }

console.log(nicknameGenerator('Robert')) // Rob