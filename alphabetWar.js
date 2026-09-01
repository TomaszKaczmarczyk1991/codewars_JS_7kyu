function alphabetWar(fight){
   const leftSide = {w: 4, p: 3, b: 2, s: 1}
   const rightSide = {m: 4, q: 3, d: 2, z: 1}
   
   let leftResult = 0
   let rightResult = 0
   
   for(let i of fight){
       if(leftSide[i]) leftResult += leftSide[i]
       if(rightSide[i]) rightResult += rightSide[i]
   }
   
   return leftResult === rightResult ? "Let's fight again!" : leftResult > rightResult ?
   "Left side wins!" : "Right side wins!"
}

console.log(alphabetWar("zzzzs")) // Right side wins!