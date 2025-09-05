const removeFromArray = function(arr) {
    const args = Array.prototype.slice.call(arguments, 1);
    for(let num of args){
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === num) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
