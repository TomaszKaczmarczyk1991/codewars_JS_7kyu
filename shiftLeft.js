function shiftLeft(s, t) {
    let i = s.length - 1;
    let j = t.length - 1;
    let common = 0;

    while (i >= 0 && j >= 0 && s[i] === t[j]) {
        common++;
        i--;
        j--;
    }

    return (s.length - common) + (t.length - common);
}