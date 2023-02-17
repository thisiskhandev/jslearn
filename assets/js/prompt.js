document.write(
  '<br><br><br><br><button onclick="dialogBox()" id="prompt">Confirm box</button><br><br>'
);

function dialogBox() {
  // var confirmBox = confirm("Are you Ali!");
  // if (confirmBox === true) {
  //   console.log(confirmBox);
  //   console.log("You can proceed!");
  // } else {
  //   console.log(confirmBox);
  //   console.warn("You cannont login!");
  // }
  // var askName = prompt("What is your name");
  // var askAge = prompt("What are your marks! Total!");
  var marks = Number(prompt("What are your marks! Total!"));
  console.log(typeof marks);
}
