function openOrSenior(data){
  const cat = [];
  
  data.forEach((item) => {
    (item[0] >= 55) && (item[1] > 7) ? cat.push('Senior') : cat.push('Open')
  })
  return cat;
}


/* GH BEST PRACTICES
function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
*/