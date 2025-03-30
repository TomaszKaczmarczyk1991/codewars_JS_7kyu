function maxPossibleScore(obj, arr) {
    let result = 0;

    for(const q in obj) {
        // console.log(obj[q])
        if(arr.includes(q)) result += obj[q] * 2;
        else result += obj[q];
    }
    return result;
  }


console.log(maxPossibleScore({"a": 1, "b": 2, "c": 3}, ["a", "c"])); // 1 * 2 + 2 + 3 * 2 = 10

