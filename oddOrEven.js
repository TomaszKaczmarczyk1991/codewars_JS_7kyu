function oddOrEven(array) {
   if(array.length === 0) return 'even'

   const sum = array.reduce((acc, val) => {
    return acc += val
   },0)

   return (sum % 2 === 0) ? 'even' : 'odd'
}