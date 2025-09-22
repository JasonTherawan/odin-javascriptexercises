let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(avg) {
    return avg.reduce((sum, avg) => sum + avg.age, 0) / avg.length;
}

console.log(getAverageAge(arr));