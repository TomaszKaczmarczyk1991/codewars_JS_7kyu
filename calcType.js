function calcType(a, b, res) {
    if(res - a === b) return 'addition';
    if(res - a === -b) return 'subtraction';
    if(res / a === b) return 'multiplication';
    if(res * b === a) return 'division';
  }