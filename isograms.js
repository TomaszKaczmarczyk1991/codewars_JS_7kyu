function isIsogram(str){
    const string = str.toLowerCase();
    const uniqueStr = [...new Set(string)];
    return (string.length === uniqueStr.length) ? true : false;
}