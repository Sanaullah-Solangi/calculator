//!=============== Calculator ===============
//? ASCY NUMS = "33 to 47";
//* getting values in variables
var display = document.querySelector(".display");
var currentNum = document.querySelector(".currentInput");
var currentNum = document.querySelector(".currentInput");
var prevNum = document.querySelector(".prevInput");
var currentOperator = document.querySelector(".currentOperator");

//! function to get number
function addNumber(num) {
  currentNum.innerHTML += num;
}

//! function to add operator
function addOperator(ope) {
  //? condition for clear display
  if (ope == "CE") {
    currentNum.innerHTML = "";
    currentOperator.innerHTML = "";
    prevNum.innerHTML = "";
  }
  //? condition for replace operator
  else {
    currentOperator.innerHTML = ope;
  }
  //? condition for replace currentNum by prevNum
  if (prevNum.innerHTML == "") {
    prevNum.innerHTML = currentNum.innerHTML;
  }
  currentNum.innerHTML = "";
}

//! function to cunclude result
function sum() {
  var result = "";
  var num1 = parseFloat(prevNum.innerHTML);
  var num2 = parseFloat(currentNum.innerHTML);
  if (currentOperator.innerHTML == "+") {
    result = num1 + num2;
  } else if (currentOperator.innerHTML == "-") {
    result = num1 - num2;
  } else if (currentOperator.innerHTML == "*") {
    result = num1 * num2;
  } else if (currentOperator.innerHTML == "/") {
    result = num1 / num2;
  }
  prevNum.innerHTML = "";
  currentOperator.innerHTML = "";
  currentNum.innerHTML = result;
}
