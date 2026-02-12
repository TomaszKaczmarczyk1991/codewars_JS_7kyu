function onlyOne(...args) {
    const booleans = args
    
    if(args.length === 0) return false
    
    const filtered = booleans.filter(x => x === true)
    if(filtered.length === 1) return true
    return false
}