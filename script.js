// Part 1
function calculateGrade() {
  // Getting the value from the input field and converting it to an integer
  const score = parseInt(document.getElementById('scoreInput').value)
  const resultDiv = document.getElementById('gradeResult');

  // Checking if value entered is ValidityState, that is between 0 and 100
  if (isNaN(score) || score < 0 || score > 100) {
    resultDiv.textContent = "Please enter a valid number between 0 and 100.";
    resultDiv.className = "result error";
    resultDiv.style.display = "grid";
    return;
  }

  // let grade;

  // Using if statement to loop through the grading criteria
  if (score >= 90) {
    grade = "A";
  } else if (score >= 85) {
    grade = "A-";
  } else if (score >= 75) {
    grade = "B+";
  } else if (score >= 65) {
    grade = "B";
  } else if (score >= 55) {
    grade = "C+";
  } else if (score >= 45) {
    grade = "C";
  } else if (score >= 35) {
    grade = "D";
  } else {
    grade = "E";
  }

  resultDiv.textContent = `Your grade is: ${grade}`;
  resultDiv.className = 'result'
  resultDiv.style.display = "grid";
};

// Function to convert celsiusToFahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32
}

// Function to convert fahrenheitToCelsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}

function convertTemperature() {
  const tempInput = parseFloat(document.getElementById('tempInput').value);
  const tempResult = document.getElementById('tempResult');

  if (isNaN(tempInput)) {
    tempResult.textContent = "Please enter a valid number.";
    tempResult.className = "result error";
    tempResult.style.display = "grid";
    return;
  }

  const tempUnit = document.getElementById('tempUnit').value;

  let convertedTemp, fromUnit, toUnit;

  if (tempUnit === "c") {
    convertedTemp = celsiusToFahrenheit(tempInput)
    fromUnit = '°C';
    toUnit = '°F';
    tempResult.textContent = `${tempInput}${fromUnit} is equal to ${convertedTemp.toFixed(2)}${toUnit}`;
    tempResult.className = 'result'
    tempResult.style.display = "grid";
  } else {
    convertedTemp = fahrenheitToCelsius(tempInput)
    fromUnit = '°F';
    toUnit = '°C';
    tempResult.textContent = `${tempInput}${fromUnit} is equal to ${convertedTemp.toFixed(2)}${toUnit}`;
    tempResult.className = 'result'
    tempResult.style.display = "grid";
  }
}

// Function demonstrating nested loops
function generatePattern() {
  const num = parseInt(document.getElementById('patternInput').value);
  const resultDiv = document.getElementById('patternResult');

  if (isNaN(num) || num <= 0 || num > 10) {
    resultDiv.innerHTML = 'Please enter a number between 1 and 10!';
    resultDiv.className = 'result error'
    resultDiv.style.display = 'block';
    return;
  }

  let pattern = '<h4>Number Pyramid Pattern:</h4>';

  // Nested for loop to create pyramid pattern
  for (let i = 1; i <= num; i++) {
    pattern += '<div>';
    for (let j = 1; j <= i; j++) {
      pattern += `${j} `;
    }
    pattern += '</div>';
  }

  
  pattern += '<h4>Multiplication Table:</h4>';
  let multiplier = 1;
  while (multiplier <= 5) {
    pattern += `<div>${num} x ${multiplier} = ${num * multiplier}</div>`;
    multiplier++;
  }

  resultDiv.innerHTML = pattern;
  resultDiv.style.display = 'block';

}

// Changing background color with an alert
function changeBgColor() {
  let body = document.getElementById('body');

  body.style.backgroundColor = "#4caf50";
  alert("Got you!");
}