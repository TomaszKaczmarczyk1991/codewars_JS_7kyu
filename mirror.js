function mirror(data) {
  const sorted = [...data].sort((a, b) => a - b)
  const rest = sorted.slice(0, -1).reverse()
  
  return [...sorted, ...rest]
}