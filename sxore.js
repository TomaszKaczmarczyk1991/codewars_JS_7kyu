function sxore(n) {
    if (n % 4 === 0) return n;
    if (n % 4 === 1) return 1;
    if (n % 4 === 2) return n + 1;
    return 0;
}

  console.log(sxore(50)) // 51