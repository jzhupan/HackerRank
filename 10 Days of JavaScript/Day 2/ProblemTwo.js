function getLetter(s) {
  let letter;
  // Write your code here
  function validate(s) {
    let sFirstLetter = s[0];
    let setA = new Set("aeiuo");
    let setB = new Set("bcdfg");
    let setC = new Set("hjklm");
    let setD = new Set("npqrstvwxyz");

    if (setA.has(sFirstLetter)) {
      return "A";
    } else if (setB.has(sFirstLetter)) {
      return "B";
    } else if (setC.has(sFirstLetter)) {
      return "C";
    } else if (setD.has(sFirstLetter)) {
      return "D";
    }
  }
  switch (validate(s)) {
    case "A":
      letter = "A";
      break;
    case "B":
      letter = "B";
      break;
    case "C":
      letter = "C";
      break;
    case "D":
      letter = "D";
  }
  return letter;
}
