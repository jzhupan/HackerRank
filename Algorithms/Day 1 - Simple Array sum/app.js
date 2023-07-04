//1 Simple Array sum
/*
Given an array of integers, find the sum of its elements.
For example, if the array ar=[1,2,3], 1+2+3=6, so return 6.

Function Description
Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.
simpleArraySum has the following parameter(s):
○ ar: an array of integers

Input Format
The first line contains an integer, n, denoting the size of the array.
The second line contains n space-separated integers representing the array's elements.

Constraints
0 < n,ar[i] <= 1000

Output Format
Print the sum of the array's elements as a single integer.

Sample Input
6
1 2 3 4 10 11
Sample Output
31
Explanation
We print the sum of the array's elements: 1+2+3+4+10+11=31.
*/

function simpleArraySum(ar) {
    // Write your code here
    let sum = 0
 for (let i = 0; i < ar.length; i++ ){
   sum += ar[i]
 }
 console.log(sum)
 return sum
}

//2 Compare Triplets

function compareTriplets(a, b) {
  let alicesScores = a;
  let bobsScores = b;
  
  let alicesPoints = 0;
  let bobsPoints =0;
  
  for(let i=0; i < alicesScores.length; i++){
    if(alicesScores[i] === bobsScores[i]){
      continue
    } else if( alicesScores[i] > bobsScores[i]){
      alicesPoints++
    } else {
      bobsPoints++
    }
  }
  console.log([alicesPoints, bobsPoints])
  return [alicesPoints, bobsPoints]
}

