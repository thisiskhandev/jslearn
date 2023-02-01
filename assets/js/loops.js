document.write("<h3>Forloops</h3>");
var abc = 10;
for (var x = 1; x <= 100; x += 10) {
  document.write(x + "<br>");
}

var names = "hassan";
names = names + " Khan";
// console.log(names);

var numA = 10;
numA *= numA;
// console.log(numA);

document.write("<h3>For Loop Key and Objects</h3>");
let studentData = [
  {
    id: 1,
    name: "Ali",
    class: 10,
    address: "HEJ 123",
    phone: {
      primary: 999,
      secondary: 456,
    },
  },
  {
    id: 2,
    name: "Salman",
    class: 9,
    address: "ABC 123",
    phone: 123,
  },
  {
    id: 3,
    name: "Hassan",
    class: 9,
    address: "ABC 123",
    phone: 123,
  },
];

// for (let stdD in studentData) {
//   console.log(studentData[stdD]);
// }

// console.log(studentData[1].id);
// console.log(studentData[2].name);
// console.log(studentData[2].class);

document.write('<table  border="3">');
document.write(
  "<thead><tr><th>ID</th><th>Name</th><th>Class</th><th>Adress</th><th>Phone</th></tr></thead><tbody>"
);
for (var stD = 0; stD < studentData.length; stD++) {
  document.write("<tr><td>" + studentData[stD].id + "</td>");
  document.write("<td>" + studentData[stD].name + "</td>");
  document.write("<td>" + studentData[stD].class + "</td>");
  document.write("<td>" + studentData[stD].address + "</td>");
  document.write("<td>" + studentData[stD].phone + "</td></tr>");
}
document.write("</tbody><table>");

// for(var ind = 0; ind >=)
