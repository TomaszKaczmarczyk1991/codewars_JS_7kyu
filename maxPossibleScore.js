function maxPossibleScore(obj, arr) {
    let result = 0;
    const bonusQuestions = new Set(arr);

    for (const q of Object.keys(obj)) {
        result += obj[q] * (bonusQuestions.has(q) ? 2 : 1);
    }
    
    return result;
}


console.log(maxPossibleScore({"a": 1, "b": 2, "c": 3}, ["a", "c"])); // 1 * 2 + 2 + 3 * 2 = 10

