function burner(c, h, o) {
    const water = Math.min(o, Math.floor(h / 2));
    const co2 = Math.min(c, Math.floor((o - water) / 2));
    const methane = Math.min(c - co2, Math.floor((h - water * 2) / 4));

    return [water, co2, methane];
}

console.log(burner(45, 11, 100))