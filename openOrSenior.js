function openOrSenior(data){
  const cat = [];
  
  data.forEach((item) => {
    (item[0] >= 55) && (item[1] > 7) ? cat.push('Senior') : cat.push('Open')
  })
  return cat;
}