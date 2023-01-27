/*  WRITING IN DOM
*/
let cars = document.getElementById("heading");
let heading = document.getElementById("mainHead");
cars.innerText = carsArr.join(" ");
// console.log(carsArr);
heading.innerText = "<li>hi this is hassan!<li>";
// cars.innerHTML = "<ul><li>Test 1</li><li>Test 2</li></ul>";
document.write('<ol class="list">');
document.write("<li>" + carsArr[0] + "</li>");
document.write("<li>" + carsArr[1] + "</li>");
document.write("<li>" + carsArr[2] + "</li>");
document.write("<li>" + carsArr[3] + "</li>");
document.write("<li>" + carsArr[4] + "</li>");
document.write("<li>" + carsArr[5] + "</li>");
document.write("<li>" + carsArr[6] + "</li>");
document.write("</ol>");