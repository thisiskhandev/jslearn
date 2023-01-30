/* 
Intergers and floats both contain numerical data. 
However, intergers (int) is a number without a decimal point.
A float on the other hand, is a number that has a decimal place.
*/

var randomFloat = Math.random(); // Generates a random number 0.12445 ... return in Float
var randomBwFloat = Math.random() * 10; // Genrates a random something like 1-9.3432529... return in Float
var randomBwInt = Math.floor(Math.random() * 10); // Returns value b/w 1-9 in Integer

// document.getElementById("randomBtn")

document.write(
  "Random Float Number: <b>" +
    randomFloat +
    "</b><br>" +
    "Random 1-10 in Float: <b>" +
    randomBwFloat +
    "</b><br> Random 1-10 without decimals: <b>" +
    randomBwInt +
    "</b>"
);

function randomFun() {
  let random = document.getElementById("random");
  let randomBw = document.getElementById("randomBw");
  let randomfloor = document.getElementById("randomfloor");
  random.innerText = "Random Float Number: " + randomFloat;
  randomBw.innerText = "Random 1-10 in Float: " + randomBwFloat;
  randomfloor.innerText = "Random 1-10 without decimals: " + randomBwInt;
}
