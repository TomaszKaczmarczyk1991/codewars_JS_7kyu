var counselors = [["Chad", 2], ["Tommy", 9]];
var jason = 7;

function killcount(counselors, jason){
    const killed = [];
    counselors.forEach(element => {
        if(element[1] < jason) killed.push(element[0]) 
    });
    return killed;
  }

console.log(killcount(counselors, jason))