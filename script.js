// Part 1
function calculateGrade() {
  // Getting the value from the input field and converting it to an integer
  const score = parseInt(document.getElementById('scoreInput').value)
  const resultDiv = document.getElementById('gradeResult');

  // Checking if value entered is ValidityState, that is between 0 and 100
  if(isNaN(score) || score < 0 || score > 100) {
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

  resultDiv.textContent = `Your grade is: ${}`;
  resultDiv.className = 'result'
  resultDiv.style.display = "grid";
}