function computerToPhone(numbers) {
  const computer = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0"]
  ];

  const phone = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["0"]
  ];

  const map = {};

  for (let i = 0; i < computer.length; i++) {
    for (let j = 0; j < computer[i].length; j++) {
      map[computer[i][j]] = phone[i][j];
    }
  }
  return numbers.split('').map(x => map[x]).join('');
}