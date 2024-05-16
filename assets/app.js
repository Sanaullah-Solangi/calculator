//* FIRST STEP : 👇
//! GETTING ELEMENTS
var display = document.querySelector(".display");
var currentNum = document.querySelector(".currentInput");
var prevNum = document.querySelector(".prevInput");
var currentOperator = document.querySelector(".currentOperator");
var storingHistory = document.querySelector(".myHistory"); // DIV FOR HISTORY
var toggleBTns = document.querySelector(".historyToggleBtns");
var collectingHistory = "";
var checkOperator = "";
var checkCurrentNum = "";
var flag = "justAdd";
var count = 0;
toggleBTns.addEventListener("click", () => {
  if (count == 0) {
    count = 1;
    toggleBTns.querySelector(".show").style.display = "none";
    toggleBTns.querySelector(".hide").style.display = "block";
    storingHistory.classList.add("showHistory");
  } else {
    count = 0;
    toggleBTns.querySelector(".show").style.display = "block";
    toggleBTns.querySelector(".hide").style.display = "none";
    storingHistory.classList.remove("showHistory");
  }
});

//! ADDING NUMBER TO THE DISPLAY
function addNumber(num) {
  if (flag == "replaceAndAdd") {
    prevNum.innerHTML = "";
  }
  if (
    checkCurrentNum == currentNum.innerHTML ||
    currentNum.innerHTML == "0" ||
    flag == "replaceAndAdd"
  ) {
    currentNum.innerHTML = num;
    flag = "justAdd";
  } else {
    currentNum.innerHTML += num;
  }
}

//! ADDING OPERATOR
function addOperator(ope) {
  if (ope == "CE") {
    currentNum.innerHTML = "0";
    currentOperator.innerHTML = "";
    prevNum.innerHTML = "";
    checkCurrentNum = "";
    checkOperator = "";
  } else if (ope == "DEl") {
    currentNum.innerHTML = currentNum.innerHTML.slice(
      0,
      currentNum.innerHTML.length - 1
    );
  } else {
    checkOperator = ope;
    prevNum.innerHTML = currentNum.innerHTML + checkOperator;
    checkCurrentNum = currentNum.innerHTML;
  }
}

function sum() {
  var result = "";
  var prevValue = `${checkCurrentNum} ${checkOperator} ${currentNum.innerHTML} =`;
  var num1 = Number(checkCurrentNum);
  var num2 = Number(currentNum.innerHTML);
  if (checkOperator == "*") {
    result = num1 * num2;
  } else if (checkOperator == "+") {
    result = num1 + num2;
  } else if (checkOperator == "-") {
    result = num1 - num2;
  } else if (checkOperator == "/") {
    result = num1 / num2;
  } else if (checkOperator == "%") {
    result = num1 % num2;
  }
  flag = "replaceAndAdd";
  prevNum.innerHTML = prevValue;
  currentNum.innerHTML = result;
  storingHistory.innerHTML += `<p class="historyPart">${prevValue} <br> <span class='mainResult'>${result}</span></p>`;
}

/*
//* SECOND STEP : 👇
//! GETTING INPUT VALUES
// BY DEFAULT DISPLAY'S VALUE IS '0'
function addNumber(num = 0) {
  // IF DISPLAY VALUE IS '0' IT WILL BE REPLACED BY THE CURRENT NUMBER
  if (currentNum.innerHTML == "0") {
    currentNum.innerHTML = num;
    collectingHistory = num;
    storingHistory.innerHTML = collectingHistory;
    console.log(collectingHistory);
  }
  // IF DISPLAY VALUE IS AN OTHER NUMBER DESPITE '0' THE CURRENT NUMBER WILL BE ADDED TO IT
  else {
    currentNum.innerHTML += num;
    collectingHistory = num;
    storingHistory.innerHTML += collectingHistory;
    console.log(collectingHistory);
  }
}
addNumber();

//* THIRD STEP : 👇
//! GETTING OPERATORS, ASSIGNING VALUE OF 'CURRENT NUMBER' TO 'PREV NUMBER' AND DOING 'CURRENT NUMBER' EMPTY
// RECEIVING OPERATOERS
function addOperator(ope) {
  // IF OPERATOR IS 'CE', THE DISPLAY WILL BE EMPTY
  if (ope == "CE") {
    currentNum.innerHTML = "";
    currentOperator.innerHTML = "";
    prevNum.innerHTML = "";
  }
  // IF OPERATOR IS NOT 'CE', IT WILL BE SHOWING TO THE 'DISPLAY' AND 'ADDED' TO THE CURRENT OPEATOR
  else {
    currentOperator.innerHTML = ope;
    collectingHistory = ope;
    storingHistory.innerHTML += collectingHistory;
    console.log(collectingHistory);
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
  // TO DISPLAY THE RESULT, IT IS ASSIGNED TO THE CURRENT NUMBER
  currentNum.innerHTML = result.toString();
  collectingHistory = `<br>${currentNum.innerHTML}<br>`;
  storingHistory.innerHTML += collectingHistory;
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
*/
