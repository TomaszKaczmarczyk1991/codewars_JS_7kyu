function polydivisible(x) {
    const num = x.toString();

    for (let i = 1; i <= num.length; i++) {
        if (Number(num.slice(0, i)) % i !== 0) {
            return false;
        }
    }
    return true;
}

console.log(polydivisible(1232))
