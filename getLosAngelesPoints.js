function getLosAngelesPoints(results) {  
    let points = 0;
    let city = 'Los Angeles';
    for (let i = 0; i < results.length; i++) {
        if (results[i][0].toLowerCase().includes(city.toLowerCase())) {
            const score = results[i][1];
            const [ teamPoints ] = score.split(':').map(Number);
            points += teamPoints;
        }
    }

    return points;
}

const games = [
    ["Dallas Mavericks", "492:513"],
    ["Los Angeles Lakers", "641:637"],
    ["Houston Rockets", "494:458"],
    ["Los Angeles Clippers", "382:422"],
    ["New Orleans Pelicans", "433:454"],
    ["Oklahoma City Thunder", "315:318"],
    ["Golden State Warriors", "559:503"],
    ["Memphis Grizzlies", "550:511"],
    ["Portland Trail Blazers", "527:520"],
    ["Minnesota Timberwolves", "495:494"],
    ["Utah Jazz", "399:402"],
    ["Sacramento Kings", "420:431"],
    ["San Antonio Spurs", "469:460"],
    ["Phoenix Suns", "523:522"],
    ["Denver Nuggets", "646:658"]
];

console.log(getLosAngelesPoints(games));