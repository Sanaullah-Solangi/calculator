//! getting values in variables
var display = document.querySelector(".display");
var currentNum = document.querySelector(".currentInput");
var prevNum = document.querySelector(".prevInput");
var currentOperator = document.querySelector(".currentOperator");
//! getting numbers
function addNumber(num = 0) {
  if (currentNum.innerHTML == "0") {
    currentNum.innerHTML = num;
  } else {
    currentNum.innerHTML += num;
  }
}
addNumber();

//! getting operators
function addOperator(ope) {
  if (ope == "CE") {
    currentNum.innerHTML = "";
    currentOperator.innerHTML = "";
    prevNum.innerHTML = "";
  } else {
    currentOperator.innerHTML = ope;
  }
  // transfering current number to previous number
  if (prevNum.innerHTML == "") {
    prevNum.innerHTML = currentNum.innerHTML;
  }
  currentNum.innerHTML = "";
}

//! calculating the result
function sum() {
  var result = "";
  var num1 = Number(prevNum.innerHTML);
  var num2 = Number(currentNum.innerHTML);
  if (currentOperator.innerHTML == "+") {
    result = num1 + num2;
  } else if (currentOperator.innerHTML == "-") {
    result = num1 - num2;
  } else if (currentOperator.innerHTML == "*") {
    result = num1 * num2;
  } else if (currentOperator.innerHTML == "/") {
    result = num1 / num2;
  } else if (currentOperator.innerHTML == "%") {
    result = num1 % num2;
  }
  prevNum.innerHTML = "";
  currentOperator.innerHTML = "";
  currentNum.innerHTML = result.toFixed(2).toString();
}

//! delete single value from last
function delValue() {
  if (currentNum.innerHTML) {
    currentNum.innerHTML = currentNum.innerHTML.slice(
      0,
      currentNum.innerHTML.length - 1
    );
  } else if (currentNum.innerHTML == "" && prevNum.innerHTML == "") {
    currentOperator = "";
  } else {
    prevNum.innerHTML = prevNum.innerHTML.slice(
      0,
      prevNum.innerHTML.length - 1
    );
  }
}
