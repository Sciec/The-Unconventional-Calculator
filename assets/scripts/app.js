const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; // for all the logs of the calculation

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBefore, calcNumber) {
  const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult, // it wont crash, js is intelligent enough here to know the difference between these two prevResult
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry); // push function in array overwrites the new entries onto the existing array
  console.log(logEntries); // to display the whole array as output maybe in the browser
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    (calculationType !== 'ADD' &&
      calculationType !== 'SUBTRACT' &&
      calculationType !== 'MULTIPLY' &&
      calculationType !== 'DIVIDE') ||
    !enteredNumber
    // enteredNumber checking for 0, 0 in javascript is false, so !enteredNumber is 'not false' statement
  ) {
    return;
  }

  // if (
  //   calculationType === 'ADD' ||
  //   calculationType === 'SUBTRACT' ||
  //   calculationType === 'MUTLIPLY' ||
  //   calculationType === 'DIVIDE'
  // ) {
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
  // }
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
