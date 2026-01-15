function bump(x){
    return (x.split('').filter(x => x !== "_").join('').length <= 15) ? "Woohoo!" : "Car Dead"  
}