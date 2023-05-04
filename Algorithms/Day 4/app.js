// Plus Minus

function plusMinus(arr) {
    // Write your code here
    //arr output [ -4, 3, -9, 0, 4, 1 ]
    let positiveNums = arr.filter(num => num > 0).length/ arr.length;
    let negativeNums = arr.filter(num => num < 0).length/ arr.length;
    let zeroNums = arr.filter(num => num == 0).length/ arr.length;
    console.log(positiveNums.toFixed(6) + '\n' + negativeNums.toFixed(6) + '\n' + zeroNums.toFixed(6))
}

