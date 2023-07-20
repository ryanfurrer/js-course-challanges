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

// Array Iterators
/*
// forEach
// does not return a new array
// iterates over a chosen array, we then choose what we want to do

// array 
const people = [
	{ name: 'bob', age: 20, position: 'developer' },
	{ name: 'peter', age: 25, position: 'designer' },
	{ name: 'susie', age: 30, position: 'boss' },
];

// with function declaration
function showPerson(person) {
	console.log(person.position);
}
people.forEach(showPerson);

// with anonymous function
people.forEach(function (person) {
	console.log(person.position);
});

// map
// returns a new array
// does not change size of original array
// uses values from original array when making new one

const people = [
	{ name: 'bob', age: 20, position: 'developer' },
	{ name: 'peter', age: 25, position: 'designer' },
	{ name: 'susie', age: 30, position: 'boss' },
];

const ages = people.map(function (person) {
	return person.age + 20;
});

const newPeople = people.map(function (person) {
	return {
		firstName: person.name,
		oldAge: person.age + 20,
	};
});

const names = people.map(function (person) {
	return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = names.join('');

console.log(names);
// Outputs array names as <h1> in the body of the webpage

// filter
// returns a new array
// can manipulate the size of  the new array
// returns based on condition
// if no items match the condition, it will return an empty array

const people = [
	{ name: 'bob', age: 20, position: 'developer' },
	{ name: 'peter', age: 25, position: 'designer' },
	{ name: 'susie', age: 30, position: 'boss' },
];

// returns array of people that are 25 or younger
const youngPeople = people.filter(function (person) {
	return person.age <= 25;
});

console.log(youngPeople);

// returns array of people with the position 'developer'
const developers = people.filter(function (person) {
	return person.position === 'developer';
});

console.log(developers);

// find
// returns a single instance; in this case, it will return a single object from the people array
// returns the first match of the condition. if there is no match, it returns undefined
// great for getting unique values

const people = [
	{ name: 'bob', age: 20, position: 'developer', id: 1 },
	{ name: 'peter', age: 25, position: 'designer', id: 2 },
	{ name: 'susie', age: 30, position: 'boss', id: 3 },
];

const names = ['bob', 'peter', 'susie'];

// returns string if the names array contains 'bob'
console.log(
	names.find(function (name) {
		return name === 'bob';
	})
);

const person = people.find(function (person) {
	return person.id === 1;
});

// returns the object in the person array that contains an id of 1
console.log(person);

// if we use filter, an array will be returned
const person2 = people.filter(function (person) {
	return person.id === 3;
});

// must access the property of the object inside the people array
console.log(person2[0].name);

//reduce
// iterates, callback function
// reduces the values fed to it to a single value - number, array, or object, etc.
// accepts two parameters typically named 'acc' and 'curr'
// first parameter = ('acc') - total of all calculations
// second parameter = ('curr') - current iteration/value

const people = [
	{ name: 'bob', age: 20, position: 'developer', id: 1, salary: 200 },
	{ name: 'peter', age: 25, position: 'designer', id: 2, salary: 300 },
	{ name: 'susie', age: 30, position: 'boss', id: 3, salary: 500 },
];

const total = people.reduce(function (acc, curr) {
	console.log(`total: ${acc}`);
	console.log(`current salary: ${curr.salary}`);

	acc += curr.salary;
	return acc;
}, 0);

console.log(total);

*/

// -------------------- Start of Challenge --------------------

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

// Students array is placed in /10-data.js

// console.log(students);

// #### Use Multiple Files

// - easer to manage code base (file, project)
// - order matters
// - other ways to achieve the same result (ES6 modules, fetch DB )
// - not limited to just static data

// #### updatedStudents

// 1. add role:'student' property to each object
//    using MAP method
// 2. assign to 'updatedStudents' variable and log

// const updatedStudents = students.map((role) => ({ ...role, role: 'student' }))

const updatedStudents = students.map(function (student) {
	student.role = 'student';
	return student;
});

// console.log(updatedStudents);

// #### highScores

// 1. filter array and return only scores >= 80
// 2. assign to 'highScores' variable and log

const highScores = students.filter(function (student) {
	return student.score >= 80;
});

// console.log(highScores);

// #### specificId

// 1. find specific id in array
// 2. assign to 'specificId' variable and log

const specificID = students.find(function (student) {
	return student.id === 2;
});

// console.log(specificID);

// #### averageScore

// 1. sum up all student.score values with reduce
// 2. divide by the length of the students array
// 3. assign to 'averageScore' and log

const averageScore =
	students.reduce(function (acc, curr) {
		console.log(`current score: ${curr.score}`);
		acc += curr.score;
		console.log(`total: ${acc}`);
		return acc;
	}, 0) / students.length;

console.log(`The average score is: ${averageScore}`);
// total score should equal 372
// average equal 74.4

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
