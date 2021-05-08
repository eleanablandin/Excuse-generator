/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function excuses() {
  let who = [
    "Batman",
    "Superman",
    "Your brother",
    "Your girlfriend",
    "The president",
    "Madonna"
  ];
  let verb = [
    "protects",
    "burned",
    "crushed",
    "attacked",
    "loved",
    "ate",
    "bit",
    "pissed"
  ];
  let what = [
    "Gotham City",
    "your grandmother",
    "my car",
    "the world",
    "the pizza",
    "Hollywood"
  ];
  let when = [
    "while you was driving through the city",
    "while I was fighting with the dogs",
    "during the war",
    "while I was praying",
    "before the class"
  ];

  let person = who[Math.round(Math.random() * (who.length - 1))];
  let action = verb[Math.round(Math.random() * (verb.length - 1))];
  let object = what[Math.round(Math.random() * (what.length - 1))];
  let place = when[Math.round(Math.random() * (when.length - 1))];

  document.getElementById(
    "excuse"
  ).innerHTML = `${person} ${action} ${object} ${place}`;
};
