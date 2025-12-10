function printerError(s) {
  const arr = [...s]
  
  let counter = arr.reduce((acc, val) => {
    if (val.charCodeAt(0) > 109) acc += 1
    return acc
  }, 0)

  return `${counter}/${s.length}`
}