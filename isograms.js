function isIsogram(str){
    const string = str.toLowerCase();
    const uniqueStr = [...new Set(string)];
    return (string.length === uniqueStr.length) ? true : false;
}

// BETTER SOLUTION:

// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
// }