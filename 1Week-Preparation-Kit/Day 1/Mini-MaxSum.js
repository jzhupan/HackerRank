function miniMaxSum(arr) {
  // Write your code here
  let exception;
  let sum;
  let sumArr = [];
  let result1;
  let result2;
  for (let i = 0; i < arr.length; i++) {
    exception = arr[i];
    sum = arr.reduce((a, b) => a + b, 0);
    sumArr.push(sum - exception);
  }
  //console.log(sumArr) //[14, 13, 12, 11, 10]
  sumArr.sort();

  result1 = sumArr[0];
  result2 = sumArr.pop();
  console.log(result1, result2);
}
