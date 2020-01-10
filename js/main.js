// This is a self-invoking anonymous function
// also called an IIFE
// also called muodule

(() => {
// print("some message");
 console.log("some message - from Javascript");

// find the button element on the page by its ID with JavaScript
 let theButton = document.querySelector("#myButton"),
     theHeading = document.querySelector('h1'),
     svgImage = document.querySelector("#svgGraphic");

// this function changes the heading text
function changeText() {
   theHeading.textContent = "Hello there from the console";
}

//log the id of the svg to th console when a user hovers on it
function logSVG() {
  console.log(this.id);
}

theButton.addEventListener("click", changeText);
svgImage.addEventListener("mouseover", logSVG);
//document.quersSelector('h1').textContent = "Hello there from the console";
})();
