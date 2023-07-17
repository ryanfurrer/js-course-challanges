// ## Numbers #3

// 1. create "score1", "score2", "score3" variables and
//    assign values (0-100)
// 2. calculate total score and average score, and assign them to the variables.
// 3. log total score and average score
// 4. create "plates" variable and assign 20
// 5. create "people" variable and assign 7
// 6. calculate remaining plates and assign to the variable
// 7. add one to remaining plates
// 8. create message variable and display 'There are (your value goes here) plates available' - string concatenation
// 9. log message

let score1 = 0;
let score2 = 50;
let score3 = 100;
const totalScore = score1 + score2 + score3;
const averageScore = totalScore / 3;

console.log(totalScore);
console.log(averageScore);

let plates = 20;
let people = 7;
let remainingPlates = plates % people;
remainingPlates++;
const message = `There are ${remainingPlates} available.`;

console.log(message);
