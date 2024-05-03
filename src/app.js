/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = excuse();
};

function excuse() {
  let who = [
    "The dog",
    "My grandma",
    "The mailman",
    "My bird",
    "My pencil",
    "The president"
  ];

  let action = ["ate", "peed", "crushed", "broke", "destroyed", "stole"];

  let what = ["my homework", "my phone", "the car", "my heart", "my flipflops"];

  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
    "after I got home",
    "when my mothe was preparing dinner"
  ];

  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  return `${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`;
}
