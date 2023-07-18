"use strict";

const resultBox = document.querySelector("#result");
// console.log(resultBox);
const btns = document.querySelectorAll("button");

const keys = document.querySelector("#keys");

const terminate = ["AC", "=", "C", "Ans", "sqrt", "pow", "%"];

const dataValues = Object.values(btns).map((btn) => btn.dataset.value);

let result = 0.0;
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
      }
    }
  }
});

console.log(btns);
console.log(dataValues);

console.log(eval("Math.sqrt(2)"));
