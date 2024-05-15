function calculateStudentGrade(score) {
  // Start coding here
  let message;
  if (score >= 90) {
    message = "A";
  } else if (score >= 80) {
    message = "B";
  } else if (score >= 70) {
    message = "C";
  } else if (score >= 60) {
    message = "D";
  } else {
    message = "F";
  }

  return message;
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
