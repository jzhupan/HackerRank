function btnClick() {
  document.getElementById("btn5");
  rotate();
}

function rotate() {
  let btn1 = document.getElementById("btn1").innerHTML;
  let btn2 = document.getElementById("btn2").innerHTML;
  let btn3 = document.getElementById("btn3").innerHTML;
  let btn4 = document.getElementById("btn4").innerHTML;
  let btn6 = document.getElementById("btn6").innerHTML;
  let btn7 = document.getElementById("btn7").innerHTML;
  let btn8 = document.getElementById("btn8").innerHTML;
  let btn9 = document.getElementById("btn9").innerHTML;

  document.getElementById("btn1").innerHTML = btn4;
  document.getElementById("btn2").innerHTML = btn1;
  document.getElementById("btn3").innerHTML = btn2;
  document.getElementById("btn4").innerHTML = btn7;
  document.getElementById("btn6").innerHTML = btn3;
  document.getElementById("btn7").innerHTML = btn8;
  document.getElementById("btn8").innerHTML = btn9;
  document.getElementById("btn9").innerHTML = btn6;
}
