function plusMinus(arr) {
  // Write your code here
  let positiveArr = 0;
  let zeroArr = 0;
  let negativeArr = 0;
  let resultP;
  let resultN;
  let resultZ;

  let sortedArr = arr.sort();
  sortedArr.reverse();
  //console.log(sortedArr)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeArr += 1;
    }
    if (arr[i] > 0) {
      positiveArr += 1;
    }
    if (arr[i] == 0) {
      zeroArr += 1;
    }
  }
  resultN = positiveArr / arr.length;
  console.log(resultN.toFixed(6));
  resultP = negativeArr / arr.length;
  console.log(resultP.toFixed(6));
  resultZ = zeroArr / arr.length;
  console.log(resultZ.toFixed(6));

  return resultP, resultN, resultZ;
}
