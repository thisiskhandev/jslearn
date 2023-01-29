/*  EVENTS */

function myfun() {
  heading.innerText = "I'm changed!";
}
let cboxes = document.querySelectorAll(".cboxes");
let colorBoxes = document.querySelectorAll(".colors");
let colorTxt = document.querySelectorAll(".cboxes > h5");

function removeCopiedTxt() {
  cboxes.forEach((elemTxt) => {
    let copiedTxt = elemTxt.children[0].children;
    if (copiedTxt.length > 0) {
      copiedTxt[0].remove();
    }
  });
}

const colorFun = (event) => {
  // let colorCode = Math.floor(Math.random() * 16777215).toString(16);
  // const randomInt = (max, min) => Math.round(Math.random() * (max - min)) + min;
  // console.log(randomInt(90777215, 10777215));
  let arrColor = new Array(
    Math.floor(Math.random() * 16717245).toString(16),
    Math.floor(Math.random() * 16717205).toString(16),
    Math.floor(Math.random() * 16717265).toString(16),
    Math.floor(Math.random() * 16717235).toString(16),
    Math.floor(Math.random() * 16717255).toString(16),
    Math.floor(Math.random() * 16717295).toString(16)
  );
  // Method 1
  // for (let i = 0; i < arrColor.length; i++) {
  //   colorTxt[i].innerText = arrColor[i];
  //   console.log(colorTxt[i]);
  // }
  // Method 2
  arrColor.forEach((value, index) => {
    colorTxt[index].innerText = "#" + value.toUpperCase();
    colorBoxes[index].style.backgroundColor = "#" + value;
  });
  removeCopiedTxt();
};

cboxes.forEach((value, index) => {
  cboxes[index].addEventListener("click", function (e) {
    removeCopiedTxt();
    if (this.innerText !== "" && this.innerText.toLowerCase() !== "hex#") {
      value.classList.toggle("fadein");
      navigator.clipboard
        .writeText(this.innerText)
        .then((res) => {
          // console.log("Textcopied!", res || this.innerText);
          let copiedTxt = document.createElement("h4");
          copiedTxt.innerText = "Copied!: " + this.innerText;
          cboxes[index].children[0].appendChild(copiedTxt);
          // Converting Array.from method h4 into array
          let childrens = Array.from(cboxes[index].children[0].children);
          // Remove all nodes except last node h4
          if (childrens.length > 0) {
            childrens.slice(0, childrens.length - 1).forEach((child) => {
              child.remove(child);
            });
          }
        })
        .catch((err) => {
          console.error("faild", err);
        });
    }
  });
});
