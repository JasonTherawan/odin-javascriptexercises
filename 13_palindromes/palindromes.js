const palindromes = function (str) {
    let oldStr = str.toLowerCase().split('').filter(char =>
        (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9') || char == ""
    ).join('');
    let newStr = oldStr.split('').reverse().join('');
    return oldStr == newStr;
};

// Do not edit below this line
module.exports = palindromes;
