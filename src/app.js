/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#newExcuse").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let pronoun = ["An", "The", "A", "Some"];
  let subject = [
    "astronaut",
    "kangaroo",
    "firefighter",
    "coyote",
    "actor",
    "milkman"
  ];
  let action = [
    "stole my",
    "grabbed my",
    "screamed at my",
    "picked up my",
    "threw my",
    "wrote my"
  ];
  let object = ["purse", "bag", "book", "computer", "blanket", "towel", "car"];
  let location = [
    "in my house",
    "at my school",
    "at the park",
    "at my job",
    "in the shower",
    "at the funeral home"
  ];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let objIndex = Math.floor(Math.random() * object.length);
  let locIndex = Math.floor(Math.random() * location.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subIndex] +
    " " +
    action[actIndex] +
    " " +
    object[objIndex] +
    " " +
    location[locIndex]
  );
};
