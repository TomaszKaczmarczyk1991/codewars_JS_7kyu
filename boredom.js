function boredom(staff){
    const boredomScores = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        "pissing about": 25
      };

      let totalScore = 0;

    for(const score in staff) {
        totalScore += boredomScores[staff[score]];
    }
    
    if(totalScore <= 80) return 'kill me now'
    if(totalScore < 100 && totalScore > 80) return 'i can handle this'
    if(totalScore >= 100) return 'party time!!'
}

console.log(boredom({
    tim: 'change', jim: 'accounts',
    randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
    laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
    mr: 'finance'
})) // output: kill me now