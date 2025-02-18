function totalRecursive(arr) {
  if (arr.length === 1) return arr[0];

  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i] + arr[i + 1]);
  }

  return totalRecursive(newArr);
}

const numbers = [1, 2, 3, 4, 5];
console.log(totalRecursive(numbers)); // 48
