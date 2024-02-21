import * as component from "./app.js";
component(console.log(component(12, 3)));
const NamesArr = [
  "john",
  "bell",
  "mark",
  "deni",
  "andrey",
  "adam",
  "Jonatan",
  "Twain",
  "luisa",
  "olivia",
  "svift",
  "Daniel",
];

let currentRandom = Math.trunc(Math.random() * NamesArr.length);
console.log(NamesArr[currentRandom]);

try {
  let number = 4;
  console.log(number);
} catch (error) {
  console.log(error.message);
}

let number1 = 0;
console.log(number1);

let number2 = 9;
console.log(number2);

try {
  console.log(a);

  let a = 912;
} catch (error) {
  console.log("Error:", error);
} finally {
  console.log("ended");
}

import * as component from "./index.js";

import * as newCounter from "./index.js";

newCounter(2, 234);

console.log(newCounter);
