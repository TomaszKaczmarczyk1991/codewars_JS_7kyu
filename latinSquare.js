function makeLatinSquare(n) {
    let nums = [];
    const latinSquare = [];
    
    for (let i = 1; i <= n; i++) {
      nums.push(i);
    }
    
    for (let j = 1; j <= n; j++) {
      latinSquare.push([]);
    }
    
    for (let h = 0; h < n; h++) {   
      latinSquare[h] = [...nums];
      let x = nums.shift();
      nums.push(x);
      
      
    }
    
    return latinSquare;
}