"use strict";
// declare variables
const text = document.querySelector("#typewriter").textContent;
const textLong = text.length;
let counter;
let newText;
const keySound = new Audio("typekey1.mp3");
const spaceSound = new Audio("typespace.mp3");
let sound;

window.addEventListener("DOMContentLoaded", init);
// init - store/read the text from div
function init() {
  //reset counter
  counter = 0;
  //remove text from div
  document.querySelector("#typewriter").textContent = " ";
  // start loop
  loop();
}

function loop() {
  // slice part of the text
  newText = text.slice(0, counter + 1);
  console.log(newText);
  // decide which sound play
  sound = newText.charAt(counter);

  if (sound === " ") {
    keySound.play();
  } else {
    spaceSound.play();
  }
  // counter ++
  counter++;
  // display newText in html
  document.querySelector("#typewriter").textContent = newText;

  //if text.length<counter
  //delay 400ms
  if (counter !== textLong) {
    setTimeout(loop, 700);
  }
}
