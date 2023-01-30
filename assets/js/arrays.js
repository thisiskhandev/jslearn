/* Array of an Objects
let studentData = [
  {
    id: 1,
    name: "Hassan",
    class: 9,
    address: "ABC 123",
  },
  {
    id: 2,
    name: "Hassan",
    class: 9,
    address: "ABC 123",
  },
  {
    id: 3,
    name: "Hassan",
    class: 9,
    address: "ABC 123",
  },
];
let manufactueres = ["BMW", "Tesla"];
// document.write("I have " + manufactueres[0]);
// https://www.w3schools.com/js/js_string_templates.asp
// document.write(`I have ${manufactueres[1]}`); // Template Literals 
console.log(studentData);

*/

var fruits = ["apple", "banana", "orange", "papaya"];
fruits[0] = fruits[0].toUpperCase();
console.log(fruits.slice(1, 4));

//  Multidimentional Array
var gradeYears = [
  [1, "Ali", "Germany"],
  [2, "Hassan", "Germany"],
  [3, "Ali", "Germany"],
  [4, "Ali", "Germany"],
  [5, "Ali", "Germany"],
];
console.log(gradeYears[3][0]);