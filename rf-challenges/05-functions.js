// ## Functions #5

// 1. create "calculateTotal" function
// 2. add two parameters subTotal, tax
// 3. return sum of parameters
// 4. create 3 vars "order1","order2","order3"
// 5. call calculateResult, pass in some values and assign result to each order
// 6. log all three orders
// 7. refactor "calculateTotal" to function expression

// function calculateTotal(subTotal, tax) {
// 	return subTotal + tax;
// }

const calculateTotal = function (subTotal, tax) {
	return subTotal + tax;
};

let order1;
let order2;
let order3;

function calculateResult() {
	order1 = calculateTotal(10, 2);
	order2 = calculateTotal(20, 4);
	order3 = calculateTotal(40, 8);

	console.log(`Order 1 Total = ${order1}`);
	console.log(`Order 1 Total = ${order2}`);
	console.log(`Order 1 Total = ${order3}`);
}

calculateResult();
