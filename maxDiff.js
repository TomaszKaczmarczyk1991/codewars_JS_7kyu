function maxDiff(list) {
  if (list.length < 2) return 0;
  return Math.max(...list) - Math.min(...list);
}

console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]))