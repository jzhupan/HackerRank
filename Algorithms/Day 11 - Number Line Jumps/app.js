/* Number Line Jumps
You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).
•The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
•The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

Example
x1 = 2
v1 = 1
x2 = 1
v2 = 2

After one jump, they are both at x=3,(x1+v1 = 2+1, x2+v2 = 1+2), so the answer is YES.

Function Description
Complete the function kangaroo in the editor below.
kangaroo has the following parameter(s):
•int x1, int v1: starting position and jump distance for kangaroo 1
•int x2, int v2: starting position and jump distance for kangaroo 2

Returns
•string: either YES or NO

Input Format
A single line of four space-separated integers denoting the respective values of x1, v1, x2, and v2.

Constraints
•0 <1 x1 < x2 <= 10000
•1 <= v1 <= 10000
•1 <= v2 <= 10000

Sample Input 0
0 3 4 2

Sample Output 0
YES

Explanation 0
The two kangaroos jump through the following sequence of locations:
*Image*

From the image, it is clear that the kangaroos meet at the same location (number 12 on the number line) after same number of jumps (4 jumps), and we print YES.

Sample Input 1
NO

Explanation 1
The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., x₂ > x₁ ). Because the second kangaroo moves at a faster rate (meaning v₂ > v₁) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.

*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let kangarooOneJumps = 0
    let kangarooTwoJumps = 0
    let kangarooOnePosition = x1
    let kangarooTwoPosition = x2
    let kangarooOneSteps = v1
    let kangarooTwoSteps = v2
    
    if(kangarooTwoPosition > kangarooOnePosition && kangarooTwoSteps > kangarooOneSteps){
        return "NO"
    } else if(kangarooOnePosition > kangarooTwoPosition && kangarooOneSteps > kangarooTwoSteps){
        return "NO"
    } else {
        for(let step = 0; step < 10001; step++){
            kangarooOnePosition += kangarooOneSteps
            kangarooTwoPosition += kangarooTwoSteps
            kangarooOneJumps++
            kangarooTwoJumps++
            if(kangarooOnePosition == kangarooTwoPosition && kangarooOneJumps == kangarooTwoJumps){
                return "YES"
            }
        }
        return "NO"
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const x1 = parseInt(firstMultipleInput[0], 10);

    const v1 = parseInt(firstMultipleInput[1], 10);

    const x2 = parseInt(firstMultipleInput[2], 10);

    const v2 = parseInt(firstMultipleInput[3], 10);

    const result = kangaroo(x1, v1, x2, v2);

    ws.write(result + '\n');

    ws.end();
}
