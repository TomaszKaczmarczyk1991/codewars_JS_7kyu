function validName(array) {
  const isValidNames = [];

  if (array.length === 0) return "You must test at least one name.";
  if (array.length === 1) return "Congratulations, you can choose any name you like!";

  for (let i = 0; i < array.length - 1; i++) {
    const lastLetter = array[i][array[i].length - 1];
    const firstLetter = array[i + 1][0];

    if (lastLetter === firstLetter.toLowerCase()) {
      isValidNames.push(true);
    } else {
      isValidNames.push(false);
    }
  }

  return isValidNames.includes(false)
    ? "Back to the drawing board, your baby names are not compatible."
    : "Congratulations, your baby names are compatible!";
}

console.log(validName([]));
