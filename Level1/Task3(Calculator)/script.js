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
      resultBox.value = expression.join("");
    } else {
      if (val === "AC") {
        expression = [];
        resultBox.value = 0;
      } else if (val === "C") {
        expression.pop();
        resultBox.value = expression.join("");
      } else if (val === "=") {
        answer = eval(expression.join("")) || 0;
        resultBox.value = answer;
        expression = [];
      } else if (val === "Ans") {
        expression.push(answer);
        resultBox.value = expression.join("");
      } else if (val === "sqrt") {
      }
    }
  }
});
