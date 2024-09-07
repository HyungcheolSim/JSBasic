const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

function loopingImg() {
  for (let i = 1; i < 6; i++) {
    let newImage = document.createElement("img");
    let image = "images/pic" + i + ".jpg"; //replace the image name in each iteration
    newImage.setAttribute("src", image);
    document.querySelector(".thumb-bar").appendChild(newImage); //declare DOM here
  }
}

function clickImg() {
  SetImgSrc = function () {
    let attribute = this.getAttribute("src"); //this points to element
    let displayedImage = document.querySelector(".displayed-img");
    displayedImage.setAttribute("src", attribute);
  };
  let elements = document.querySelectorAll("img");
  Array.from(elements).forEach(function (element) {
    element.addEventListener("click", SetImgSrc);
  });
}

function darkenImg() {
  let buttonNode = document.querySelector(".dark");
  let overlay = document.querySelector(".overlay");

  buttonNode.addEventListener("click", () => {
    if (buttonNode.getAttribute("class", "dark") === "dark") {
      overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
      buttonNode.setAttribute("class", "light");
      buttonNode.textContent = "lighten";
    } else {
      buttonNode.setAttribute("class", "dark");
      overlay.style.backgroundColor = "rgba(0,0,0,0)";
      buttonNode.textContent = "darken";
    }
  });
}

window.addEventListener("load", (event) => {
  loopingImg();
  clickImg();
  darkenImg();
});
