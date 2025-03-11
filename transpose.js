function transpose(song, interval){
    const standard = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    return standard[0 + interval]
  }

console.log(transpose(['A'], 1)) // It should output: ['A#']