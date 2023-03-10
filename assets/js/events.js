/*  EVENTS */

function myfun() {
  heading.innerText = "I'm changed!";
}

/*  COLOR PALLET EVENTS */
let cboxes = document.querySelectorAll(".cboxes");
let colorBoxes = document.querySelectorAll(".colors");
let colorTxt = document.querySelectorAll(".cboxes > h5");

const removeCopiedTxt = () => {
  cboxes.forEach((elemTxt) => {
    let copiedTxt = elemTxt.children[0].children;
    if (copiedTxt.length > 0) {
      copiedTxt[0].remove();
    }
  });
};

const colorPallets = () => {
  /*
  let arrColor = new Array(
    // Math.floor(Math.random() * 16717245).toString(16)
    Math.floor(Math.random() * Math.floor(Math.random() * 16000000)).toString(
      16
    ),
    Math.floor(Math.random() * Math.floor(Math.random() * 16000000)).toString(
      16
    ),
    Math.floor(Math.random() * Math.floor(Math.random() * 16000000)).toString(
      16
    ),
    Math.floor(Math.random() * Math.floor(Math.random() * 16000000)).toString(
      16
    ),
    Math.floor(Math.random() * Math.floor(Math.random() * 16000000)).toString(
      16
    ),
    Math.floor(Math.random() * Math.floor(Math.random() * 16000000)).toString(
      16
    )
  );*/
  // Converting hexcode into array
  let arrColor = [];
  for (
    let index = 0;
    index < document.getElementById("color").children.length;
    index++
  ) {
    let arrVal = Math.floor(
      Math.random() * Math.floor(Math.random() * 16000000)
    ).toString(16);
    arrColor.push(arrVal);
  }
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
};
colorPallets();

const colorFun = () => {
  removeCopiedTxt();
  colorPallets();
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

/* BAKGROUND INPUT EVENTS */

document.getElementById("bgInput").addEventListener("change", (e) => {
  document.body.style.backgroundColor = e.target.value;
});

const resetBgHanlder = () => {
  document.body.style.backgroundColor = "";
  document.getElementById("bgInput").value = "";
};
