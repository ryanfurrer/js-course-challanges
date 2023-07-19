// ## Notes
//unshift: adds to the beginning of the array
//shift: removes from the beginning of the array
// push: adds to the end of the array
// pop: removes from the end of the array
// splice(starting index, ending index): grab specific items from the array. *mutates the original array but removing the spliced values into it's own array*

// Functions, return, if, arrays, for loops
/*
const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	if (total > 100) {
		console.log(`Whoa! You are spending way too much, chill out!`);
		return total;
	}
	console.log(`You're good, your total is less than 100`);
	return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 500, 1]);

console.log(`
  gas: ${gasTotal}
  food: ${foodTotal}.
  random: ${randomTotal}
`);
*/

// Ternary Operator
// condition ? (runs if true) : (runs if false)
// 2 > 1 ? console.log('this is true') : console.log('this is false');
//   logs 'this is true'
// 1 > 2 ? console.log('this is true') : console.log('this is false');
//   logs 'this is false'

// Callback Functions
/* A function that is passed as an argument to another function. */

// Higher Order Functions
/* Accept a callback function as an argument/parameter. */

// Functions as First Class Objects/Citizens
/* Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure) */

/* 

// Calback function
function morning(name) {
	return `Good morning, ${name}`;
}

// Calback function
function afternoon(name) {
	return `Good afternoon, ${name}`;
}

// Higher Order Function since it stores a callback function as an argument.
function greet(name, callback) {
	const myName = 'Ryan';
	console.log(`${callback(name)}, my name is ${myName}.`);
}

greet('Wally', morning);
greet('Wally', afternoon);

*/

// ----------Start of Challenge ----------

// ## Array Methods #9

// Multiple Videos

// #### Create Students Array

// 1. setup students array with 5 students
//    {
//    id: 1,
//    name: 'peter',
//    score: 80,
//    favoriteSubject: 'math',
//    },

// #### Use Multiple Files

// - easer to manage code base (file, project)
// - order matters
// - other ways to achieve the same result (ES6 modules, fetch DB )
// - not limited to just static data

// #### updatedStudents

// 1. add role:'student' property to each object
//    using MAP method
// 2. assign to 'updatedStudents' variable and log

// #### highScores

// 1. filter array and return only scores >= 80
// 2. assign to 'highScores' variable and log

// #### specificId

// 1. find specific id in array
// 2. assign to 'specificId' variable and log

// #### averageScore

// 1. sum up all student.score values with reduce
// 2. divide by the length of the students array
// 3. assign to 'averageScore' and log

// #### survey

// 1. list favorite subjects with reduce
//    {
//    english: 1
//    history: 1
//    math: 3
//    }
// 2. assign to survey and log

// ## Notes
//unshift: adds to the beginning of the array
//shift: removes from the beginning of the array
// push: adds to the end of the array
// pop: removes from the end of the array
// splice(starting index, ending index): grab specific items from the array. *mutates the original array but removing the spliced values into it's own array*

// Functions, return, if, arrays, for loops
/*
const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	if (total > 100) {
		console.log(`Whoa! You are spending way too much, chill out!`);
		return total;
	}
	console.log(`You're good, your total is less than 100`);
	return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 500, 1]);

console.log(`
  gas: ${gasTotal}
  food: ${foodTotal}.
  random: ${randomTotal}
`);
*/

// Ternary Operator
// condition ? (runs if true) : (runs if false)
// 2 > 1 ? console.log('this is true') : console.log('this is false');
//   logs 'this is true'
// 1 > 2 ? console.log('this is true') : console.log('this is false');
//   logs 'this is false'
