function nicknameGenerator(name){
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if(name.length < 4) return "Error: Name too short";
    return (vowels.includes(name[2])) ? [...name].toSpliced(4).join('') : [...name].toSpliced(3).join('');
  }

console.log(nicknameGenerator('Gregory')) // Greg

// Rozwiazanie nie przechodzi testow na Codewars. Metoda toSpliced() została wprowadzona w Node.js w wersji 20. Obecnie Codewars korzysta z wersji Node 18, która nie obsługuje tej metody