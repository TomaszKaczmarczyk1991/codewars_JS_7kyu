function minValue(values){
  const noDups = [...new Set(values)].sort((a, b) => a - b)
  
  return +noDups.join('')
}