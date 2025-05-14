function explode(x) {
  let result = [];

  if (typeof x[0] === 'number' && typeof x[1] === 'number') {
    for (let i = 0; i < x[0] + x[1]; i++) {
      result.push(x);
    }
  } else if (typeof x[0] !== 'number' && typeof x[1] === 'number') {
    for (let i = 0; i < x[1]; i++) {
      result.push(x);
    }
  } else if (typeof x[0] === 'number' && typeof x[1] !== 'number') {
    for (let i = 0; i < x[0]; i++) {
      result.push(x);
    }
  } else {
      return 'Void!';
  }
  return result;
}