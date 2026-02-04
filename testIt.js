function testit(s){
  return s.split(' ').map(x => x.length > 1 ? (x.slice(0, -1) + x.slice(-1).toUpperCase()) : x.toUpperCase()).join(' ')
}


console.log(testit("aa")) // aA