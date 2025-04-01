function scoreboard(whoAteWhat){
    const result = [];

    for(const x of whoAteWhat){
        const entry = {
            name: x.name,
            score: 0
        };

        if(x.chickenwings) entry.score += x.chickenwings * 5;
        if(x.hamburgers) entry.score += x.hamburgers * 3;
        if(x.hotdogs) entry.score += x.hotdogs * 2;

        result.push(entry);
    }
    return result.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
}


console.log(scoreboard([
    {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
    {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
  ]));


  // TARGET OUTPUT:
//   [
//     {name: "Big Bob", score: 134},
//     {name: "Habanero Hillary", score: 98}
//   ]