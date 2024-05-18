//*  New Calculator Code
//! GETTING ELEMENTS

var display = document.querySelector(".display"); // CALCULATOR DISPLAY
var currentNum = document.querySelector(".currentInput"); // EVERY NUMBER IS RECEIVED HERE
var prevNum = document.querySelector(".prevInput"); // AFTER ADDING OPERATOR 'CURRENT NUMBER' & 'OPERATOR' WILL BE ASSIGNED TO THIS AS A PREVIOUS OPERATOIN
var currentOperator = document.querySelector(".currentOperator"); // EVERY OPERATOR IS RECEIVED HERE
var storingHistory = document.querySelector(".myHistory"); // DIV CONTAINER FOR HISTORY
var toggleBTns = document.querySelector(".historyToggleBtns"); // BTNS TO SHOW & HIDE HISTORY
var checkOperator = ""; // EVERY OPERATOR IS RECEIVED HERE
var numForFurthurCalculation = ""; // TO COMPARE 'PREVIOUS INPUT' WITH 'CURRENT INPUT'. IF SAME, 'CURRENT INPUT' IS REPLACED BY "NEW INPUT"; OTHERWISE, 'CURRENT INPUT' IS CONCATENATED TO 'PREVIOUS INPUT'. COMPARISON OCCURS AT LINE #34. 👇
var flag = "justAdd"; // DETERMINES IF NEW INPUT IS ADDED TO CURRENT OR REPLACES IT: 'justAdd' CONCATS, 'replaceAndAdd' CLEARS THEN ADDS AFTER CALCULATION COMPLETED
var showDeleteAllBtn = document.querySelector(".deleteAllBtn");
var operators = ["+", "-", "/", "*", "%"];
//! HISTORY TAB FUNCTIONALITY
var count = 0; // CONTROLS SHOW/HIDE FUNCTIONALITY OF HISTORY TAB
toggleBTns.addEventListener("click", () => {
  // CALLING THE FUNCTION TO SHOW THE 'CLEAR ALL HISTORY' BUTTON
  showDelAllHistoryBtn();
  // SHOWS THE HISTORY BOX
  if (count == 0) {
    count = 1;
    toggleBTns.querySelector(".show").style.display = "none";
    toggleBTns.querySelector(".hide").style.display = "block";
    storingHistory.classList.add("showHistory");

    // HIDES THE HISTORY BOX
  } else {
    count = 0;
    toggleBTns.querySelector(".show").style.display = "block";
    toggleBTns.querySelector(".hide").style.display = "none";
    storingHistory.classList.remove("showHistory");
  }
});

//!  FUNCTION TO RECEIVE INPUT AND STORES IT IN 'currentNum' AND THEN DISPLAYS IT
function addNumber(num = "0") {
  // CONDITION TO EMPTY PREVIOUS INPUT AFTER CALCULATION COMPELETION
  if (flag == "replaceAndAdd") {
    prevNum.innerHTML = "";
  }

  // WHEN ANY INPUT IS ADDED TO THE DISPLAY 'ENTER VALID INPUT' IS REMOVED
  if (prevNum.innerHTML == "Enter Valid input") {
    prevNum.innerHTML = "";
  }
  if (
    flag == "replaceAndAdd" || // IF CALCULATION IS COMPELETED 👇
    numForFurthurCalculation == currentNum.innerHTML || // IF currentNum & 'PREVIOUS NUM' ARE SAME 👇
    currentNum.innerHTML == "0" // IF CURRENT NUM IS '0' 👇
  ) {
    // CONDITON TO EMPTY CURRENT INPUT & ADD NEW INPUT
    // REPLACE 'CURRENT NUM' BY NEW INPUT
    currentNum.innerHTML = num;
    flag = "justAdd";
  }
  // OTHERWISE CONCATE NEW INPUT WITH PREVIOUS INPUT
  else {
    currentNum.innerHTML += num;
  }
}
addNumber(); // FUNCTION IS CALLED BY DEFAULT TO SHOW '0' IN DISPLAY

//! FUNCTION TO STORE AND RECEIVE OTHER OPERATORS IN checkOperator, CLEAR DISPLAY, DELETE LAST DIGIT OF currentNum
//! DISPLAYS currentNum AS PREVIOUS INPUT ALONG WITH OPERATOR, STORES currentNum IN numForComparison FOR FURTHER CALCULATIONS

function addOperator(ope) {
  // CLEARING DISPLAY FOR 'CE'
  if (ope == "CE") {
    currentNum.innerHTML = "0";
    currentOperator.innerHTML = "";
    prevNum.innerHTML = "";
    numForFurthurCalculation = "";
    checkOperator = "";
  } // DELETING LAST DIGIT OF CURRENT INPUT FOR 'AC'
  else if (ope == "AC") {
    if (currentNum.innerHTML.length > 1) {
      currentNum.innerHTML = currentNum.innerHTML.slice(0, -1);
    } else {
      currentNum.innerHTML = 0;
    }
  } // ADDING OTHER OPERATOR IN CHECKOPERATOR, DISPLAYIN OPERATOR AND CURRENT INPUT AS A PREVIOUS INPUT
  else {
    checkOperator = ope;
    prevNum.innerHTML = currentNum.innerHTML + checkOperator;
    // STORING currentNum IN numForComparison FOR FURTHER CALCULATIONS
    numForFurthurCalculation = currentNum.innerHTML;
  }
}

//! FUNCTION TO PERFORM CALCULATIONS BASED ON REMAINING OPERATORS
//! UPDATES FLAG TO 'replaceAndAdd' AFTER CALCULATION
//! STORES CALCULATION IN HISTORY
function sum() {
  var result = "";
  // sum() FUNCTION WILL WORK ONLY WHEN THERE IS ANY VALUE IN FIELDS OTHERWISE WON'T
  if (currentNum.innerHTML && numForFurthurCalculation) {
    var prevValue = `${numForFurthurCalculation} ${checkOperator} ${currentNum.innerHTML} =`;
    var num1 = Number(numForFurthurCalculation);
    var num2 = Number(currentNum.innerHTML);
    // CONDITION TO PERFORM CALCULATIONS
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
    // UPDATES FLAG TO EMPTY DISPLAY
    flag = "replaceAndAdd";
    // DISPLAYING RESULT
    prevNum.innerHTML = prevValue;
    currentNum.innerHTML = result;
    numForFurthurCalculation = result;
    // ADDING CALCULATION IN HISTORY
    storingHistory.innerHTML += `<div class="historyContent"><div class="historyPart">${prevValue} <br> <span class='mainResult'>${result}</span></div><i class="fa-solid fa-trash" onclick="delHistory(this)"></i></div>`;
  }
  // IF WITH EMPTY DISPLAY sum() IS CALLED, 'ENTER VALID INPUT' WILL BE SHOWING IN DISPLAYs
  else {
    prevNum.innerHTML = "Enter Valid input";
  }
}

//! FUNCTION TO DELETE A SPECIFIC ENTRY FROM THE HISTORY

function delHistory(val) {
  val.parentElement.remove();
  // CALLING THE FUNCTION TO Hide THE 'CLEAR ALL HISTORY' BUTTON
  setTimeout(showDelAllHistoryBtn, 300);
  // showDelAllHistoryBtn();
}

//! FUNCTION TO SHOW & HIDE THE 'CLEAR ALL HISTORY' BUTTON
function showDelAllHistoryBtn() {
  if (storingHistory.innerHTML && count == 0) {
    showDeleteAllBtn.classList.add("showDeleteAllBtn");
  } else {
    showDeleteAllBtn.classList.remove("showDeleteAllBtn");
  }
}

//! FUNCTION TO CLEAR ALL HISTORY & HIDE 'ALL CLEAR' BUTTON
showDeleteAllBtn.addEventListener("click", () => {
  storingHistory.innerHTML = "";
  setTimeout(showDelAllHistoryBtn, 300);
});
//*  Old Calculator Code (commented out)
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
