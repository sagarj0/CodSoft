"use strict";

const resultBox = document.querySelector("#result");

const keys = document.querySelector("#keys");

const terminate = ["AC", "=", "C", "Ans", "sqrt", "pow", "%"];

let expression = [];
let answer = 0;
let temp;

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
        expression.push(`Math.sqrt(`);
      } else if (val === "pow") {
        temp = expression.join("");
        expression = [];
        expression.push(`Math.pow(${temp},`);
      } else if (val === "%") {
        temp = expression[expression.length - 1];
        expression.push("%");
        resultBox.value = expression.join("");
        expression.splice(-2);
        expression.push(temp / 100);
      }
    }
  }
});
