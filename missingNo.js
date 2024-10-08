// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:
// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?


function missingNo(nums) {
        sortedNums = nums.sort((a, b) => a - b);
    if (sortedNums[0] !== 0) return 0;
    if (sortedNums[sortedNums.length - 1] !== nums.length) return 0;
  
    for (let i = 0; i < sortedNums.length - 1; i++) {
        if (sortedNums[i] + 1 !== sortedNums[i + 1]) {
            return sortedNums[i] + 1;
        }
    }
    return sortedNums.length;
}



const arr = [9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82,
            91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80,
            81, 67, 25, 54, 13, 64, 56, 39, 48, 92, 84, 94, 87,
            90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52, 78, 6,
            57, 50, 2, 46, 19, 26, 76, 47, 14, 4, 3, 29, 17, 11, 21,
            24, 74, 65, 12, 83, 28, 41, 66, 7, 58, 55, 51, 43,
            97, 42, 86, 49, 31, 20, 75, 70, 34, 33, 38, 8, 15,
            62, 35, 61, 99, 16];

console.log(missingNo(arr));