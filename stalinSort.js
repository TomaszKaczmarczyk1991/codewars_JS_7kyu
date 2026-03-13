function stalinSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] < array[i]) {
      array.splice(i + 1, 1)
      i--
    }
  }
}