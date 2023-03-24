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

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
   operation: operationIdentifier,
   prevResult: prevResult,  // it wont crash, js is intelligent enough here to know the difference between these two prevResult
   number: operationNumber,
   result: newResult
  };
  logEntries.push(enteredNumber); // push function in array overwrites the new entries onto the existing array
  console.log(logEntries); // to display the whole array as output maybe in the browser
}

function add() {
 const enteredNumber = getUserNumberInput();
 const initialResult = currentResult;
 currentResult += enteredNumber;
 createAndWriteOutput('+', initialResult, enteredNumber);
 writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
 const enteredNumber = getUserNumberInput();
 const initialResult = currentResult;
 currentResult -= enteredNumber;
 createAndWriteOutput('-', initialResult, enteredNumber);
 writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
 const enteredNumber = getUserNumberInput();
 const initialResult = currentResult;
 currentResult *= enteredNumber;
 createAndWriteOutput('*', initialResult, enteredNumber);
 writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
 const enteredNumber = getUserNumberInput();
 const initialResult = currentResult;
 currentResult /= enteredNumber;
 createAndWriteOutput('/', initialResult, enteredNumber);
 writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);