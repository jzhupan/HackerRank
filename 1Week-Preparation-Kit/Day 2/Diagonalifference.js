function diagonalDifference(arr) {
  let firstDiag = 0;
  let secondDiag = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) {
        //on first loop, the wanted indexes are always equal to each other
        firstDiag += arr[i][j];
      }
      if (i + j === n - 1) {
        //on the second loop, the wanted indexes, the sum of these two always equal to 2 ( the length of array - 1)
        secondDiag += arr[i][j];
      }
    }
  }

  let result = Math.abs(firstDiag - secondDiag);
  //console.log(result)
  return result;
}
