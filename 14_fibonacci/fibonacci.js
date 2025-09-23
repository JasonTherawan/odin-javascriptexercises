let arr = [0, 1];

function memoize(num) {
    for (let i = arr.length; i <= num; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[num];
}

const fibonacci = function(number) {
    const num = Number(number);
    if (!Number.isInteger(num) || num < 0) return "OOPS";
    if (arr[num] !== undefined) return arr[num];
    return memoize(num);
};

// Do not edit below this line
module.exports = fibonacci;
