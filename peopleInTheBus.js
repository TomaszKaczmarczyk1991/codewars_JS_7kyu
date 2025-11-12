var number = function(busStops){
  let peopleIn = busStops[0][0]
  const peopleOut = busStops[0][1]
  
  for(let i = 1; i < busStops.length; i++){
      peopleIn += busStops[i][0]
      peopleIn -= busStops[i][1]
  }
  return peopleIn
}

console.log(number([[10,0],[3,5],[5,8]])) // 5