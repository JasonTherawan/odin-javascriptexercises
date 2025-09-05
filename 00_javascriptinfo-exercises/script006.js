function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function shuffleFisherYates(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let arr = [1, 2, 3];
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));