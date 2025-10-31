function maxDiff(list) {
    const diff = Math.max(...list) - Math.min(...list);
    return diff !== -Infinity ? diff : 0;
};

console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]))