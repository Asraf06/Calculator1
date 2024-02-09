function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  let expression = document.getElementById('display').value;
  let result;
  try {
    result = eval(expression);
    addToHistory(expression + ' = ' + result);
  } catch (error) {
    result = 'Error';
  }
  document.getElementById('display').value = result;
}

function calculateSquareRoot() {
  let expression = document.getElementById('display').value;
  let squareRoot;
  try {
    squareRoot = Math.sqrt(eval(expression));
    addToHistory('√(' + expression + ') = ' + squareRoot);
  } catch (error) {
    squareRoot = 'Error';
  }
  document.getElementById('display').value = squareRoot;
}

function calculateFactorial() {
  let number = parseInt(document.getElementById('display').value);
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  addToHistory(number + '! = ' + factorial);
  document.getElementById('display').value = factorial;
}

function addToHistory(item) {
  let historyList = document.getElementById('history-list');
  let listItem = document.createElement('li');
  listItem.textContent = item;
  historyList.appendChild(listItem);
}
