// ## Conditional Statements #7

// 1. create two objects "person1", "person2"
// 2. setup name,age (15-25),
//    status ('resident', 'tourist') keys

// 3. setup if else, condition where
//    age must be bigger than 18 and status must be
//    equal to 'resident'
// 4. test with both objects

const person1 = {
	name: 'Ryan',
	age: 19,
	status: 'resident',
};

const person2 = {
	name: 'Wally',
	age: 25,
	status: 'tourist',
};

if (person1.age >= 18 && person1.status === 'resident') {
	console.log(`You are over 18 and and a resident!`);
} else {
	console.log(`You are either under 18 or not a resident.`);
}

if (person2.age >= 18 && person2.status === 'resident') {
	console.log(`You are over 18 and and a resident!`);
} else {
	console.log(`You are either under 18 or not a resident.`);
}
