function transpose(song, interval){
    const standardSharp = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    const standardFlat = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
    const transposed = [];

    for(let i = 0; i < song.length; i++) {
        if(standardSharp.includes(song[i])) {
            for(let j = 0; j < standardSharp.length; j++) {
                if(song[i] === standardSharp[j]) {
                    transposed.push(standardSharp[(j + interval + standardSharp.length) % standardSharp.length])
                }
            }
        } else if (standardFlat.includes(song[i])) {
            for(let j = 0; j < standardFlat.length; j++) {
                if(song[i] === standardFlat[j]) {
                    transposed.push(standardSharp[(j + interval + standardFlat.length) % standardFlat.length])
                }
            }
        }
    }
    return transposed;
}

console.log(transpose(['A', 'C', 'G#'], -1))