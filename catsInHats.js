function height(n) {
    const catInTheHatHeight = 2000000;
    let result = 0;
    
    for(let i = 0; i <= n; i++){
        result += Number(catInTheHatHeight / 2.5 ** i);
    }
    return result.toFixed(3)
}