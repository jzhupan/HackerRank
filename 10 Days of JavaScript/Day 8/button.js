//Create a Button

let counter = 0;
const button = document.getElementById("btn");

button.onclick = function () {
  button.innerHTML = ++counter;
};
