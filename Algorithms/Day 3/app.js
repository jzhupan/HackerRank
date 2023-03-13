//Diagonal Difference

function diagonalDifference(arr) {
    // Write your code here
  let rightSum = 0;
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
       if(arr[i][i] === arr[j][j]){
         rightSum += arr[i][i]
       } 
    }
    
      leftSum += arr[i][arr.length -1 -i]
  }
  console.log(Math.abs(rightSum - leftSum))
  return Math.abs(rightSum - leftSum)
}

