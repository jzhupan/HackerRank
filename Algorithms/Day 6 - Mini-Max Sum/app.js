// Mini-MAx Sum
/*Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
arr=[1,3,5,7,9]
The minimum sum is 1+3+5+7=16 and the maximum sum is 3+5+7+9=24. The function prints 16 24
Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):
○ arr: an array of 5 integers

Print
Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

Input Format
A single line of five space-separated integers.

Constraints
1 <= arr[i] <= 10⁹
Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14
Explanation
The numbers are 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:
1. Sum everything except 1, the sum is 2+3+4+5=14.
2. Sum everything except 2, the sum is 1+3+4+5=13.
3. Sum everything except 3, the sum is 1+2+4+5=12.
4. Sum everything except 4, the sum is 1+2+3+5=11.
5. Sum everything except 5, the sum is 1+2+3+4=10.
Hints: Beware of integer overflow! Use 64-bit Integer.

Need help to get started? Try the Solve Me First problem
*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here

  let numArr = arr.sort(function (a, b) {
    return a - b;
  });

  function minSumArray() {
    const minArray = numArr.slice();
    minArray.pop();

    let minSum = minArray.reduce((a, b) => a + b, 0);
    return minSum;
  }

  function maxSumArray() {
    const reversedArray = numArr.reverse();
    reversedArray.pop();

    let maxSum = reversedArray.reduce((a, b) => a + b, 0);
    return maxSum;
  }
  console.log(minSumArray(), maxSumArray());
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
