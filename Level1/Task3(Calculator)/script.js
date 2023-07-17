"use strict";

const resultBox = document.querySelector("#result");

// console.log(resultBox);

const keys = document.querySelector("#keys");

const terminate = ["Ans", "C", "AC", "sqrt", "pow", "%", "="];

let result = 0.0;
let expression = [];
let answer = 0;

keys.addEventListener("click", function (event) {
  const val = event.target.getAttribute("data-value");
  if (val) {
    if (!terminate.includes(val)) {
      expression.push(val);
      console.log(val);
    } else {
      if (val === "AC") expression = [];
      else if (val === "C") expression.pop();
      else if (val === "=") {
        answer = eval(expression.join(""));
        console.log(answer);
      } else if (val === "Ans") console.log(answer);
    }
  }
});
