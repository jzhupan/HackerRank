//1 Simple Array sum

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

