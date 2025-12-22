"use strict";

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])) // [1, 2, 3, 4, 5, 6, 7, 8, 9]