function invertHash(hash) {
    return Object.fromEntries(Object.entries(hash).map(([key, value]) => [value, key]));
}

console.log(invertHash({ a: '1', b: '2', c: '3' }));
