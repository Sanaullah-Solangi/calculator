//* FIRST STEP : 👇
//! GETTING ELEMENTS
var display = document.querySelector(".display");
var currentNum = document.querySelector(".currentInput");
var prevNum = document.querySelector(".prevInput");
var currentOperator = document.querySelector(".currentOperator");

//* SECOND STEP : 👇
//! GETTING INPUT VALUES
// BY DEFAULT DISPLAY'S VALUE IS '0'
function addNumber(num = 0) {
  // IF DISPLAY VALUE IS '0' IT WILL BE REPLACED BY THE CURRENT NUMBER
  if (currentNum.innerHTML == "0") {
    currentNum.innerHTML = num;
  }
  // IF DISPLAY VALUE IS AN OTHER NUMBER DESPITE '0' THE CURRENT NUMBER WILL BE ADDED TO IT
  else {
    currentNum.innerHTML += num;
  }
}
addNumber();

//* THIRD STEP : 👇
//! GETTING OPERATORS, ASSIGNING VALUE OF 'CURRENT NUMBER' TO 'PREV NUMBER' AND DOING 'CURRENT NUMBER' EMPTY
function addOperator(ope) {
  // RECEIVING OPERATOERS
  if (ope == "CE") {
    // IF OPERATOR IS 'CE', THE DISPLAY WILL BE EMPTY
    currentNum.innerHTML = "";
    currentOperator.innerHTML = "";
    prevNum.innerHTML = "";
  }
  // IF OPERATOR IS NOT 'CE', IT WILL BE SHOWING TO THE 'DISPLAY' AND 'ADDED' TO THE CURRENT OPEATOR
  else {
    currentOperator.innerHTML = ope;
  }

  //WHEN OPERATOR IS ADDED AND IF 'PREV NUMBER' IS EMPTY THE VALUE OF 'CURRENT NUMBER' WILL BE AASIGNED TO 'PREV NUM' OTHER WISE IT IS NOT
  if (prevNum.innerHTML == "") {
    prevNum.innerHTML = currentNum.innerHTML;
  }
  currentNum.innerHTML = "";
}

//! CALCULATING THE RESULT
function sum() {
  var result = ""; // STORING THE RESULT
  // PARSING THE VALUES OF 'CURRENT NUMBER' AND 'PREV NUMBER'
  var num1 = Number(prevNum.innerHTML);
  var num2 = Number(currentNum.innerHTML);
  // CALCULATING THE RESULT
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
  // BEFORE SHOWING THE RESULT 'CURRENT OPERATOR' AND 'PREV NUMBER; ARE EMPTY
  prevNum.innerHTML = "";
  currentOperator.innerHTML = "";
  // RESULT IS ASSIGNED TO THE CURRENT NUMBER
  currentNum.innerHTML = result.toString();
}

//! DELETING A SINGEL NUMBER
function delValue() {
  if (currentNum.innerHTML) {
    // IF THERE IS ANY VALUE IN 'CURRENT NUMBER', FUNCTION WILL DELETE IT'S VALUE ONE BY ONE OTHER WISE IT WILL CHECK NEXT CONDITION
    currentNum.innerHTML = currentNum.innerHTML.slice(
      0,
      currentNum.innerHTML.length - 1
    );
  } // IF 'CURRENT NUMBER' AND 'PREV NUMBER' IS EMPTY IT WILL DELETE THE OPERATOR ALSO
  else if (currentNum.innerHTML == "" && prevNum.innerHTML == "") {
    currentOperator = "";
  } // IF 'CURRENT NUMBER' IS EMPTY BUT THERE IS VALUE IN 'PREV NUM' IT WILL DELEE IT'S VALUES ONE BY ONE
  else {
    prevNum.innerHTML = prevNum.innerHTML.slice(
      0,
      prevNum.innerHTML.length - 1
    );
  }
}
