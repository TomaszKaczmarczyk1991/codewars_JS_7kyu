function noOdds( values ){
    return values.filter((val) => val % 2 === 0)
  }

console.log(noOdds([1,2,3,4,5,6,7,8,9,10]))