function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(arr);
console.log(filtered);