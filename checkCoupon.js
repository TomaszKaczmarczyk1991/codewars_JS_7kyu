function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if(enteredCode !== correctCode) return false
  
  const currDate = new Date(currentDate)
  const expDate = new Date(expirationDate)
  
  if(currDate > expDate) return false
  
  return true
}