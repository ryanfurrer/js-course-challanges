// ## Strings #8

// 1. create function fullName
// 2. accept two parameters "firstName", "lastName"
// 3. add them together (concat) and return result in uppercase
// 4. invoke fullName and pass some values
// 5. log result
// 6. change the order of arguments
// 7. refactor to object parameter

// Function Declaration
function fullName1(firstName, lastName) {
	return `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
}

console.log(fullName1('ryan', 'furrer'));

// Function Expression
const fullName2 = function (firstName, lastName) {
	return `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
};

console.log(fullName2('ryan', 'furrer'));

// Using an object as the parameter
function fullName3({ firstName, lastName }) {
	return `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
}

console.log(fullName3({ lastName: 'furrer', firstName: 'ryan' }));
