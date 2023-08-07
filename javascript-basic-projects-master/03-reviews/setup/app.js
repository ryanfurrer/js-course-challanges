// local reviews data
const reviews = [
	{
		id: 1,
		name: 'susan smith',
		job: 'web developer',
		img: 'https://www.course-api.com/images/people/person-1.jpeg',
		text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		name: 'anna johnson',
		job: 'web designer',
		img: 'https://www.course-api.com/images/people/person-2.jpeg',
		text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
	},
	{
		id: 3,
		name: 'peter jones',
		job: 'intern',
		img: 'https://www.course-api.com/images/people/person-4.jpeg',
		text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
	},
	{
		id: 4,
		name: 'bill anderson',
		job: 'the boss',
		img: 'https://www.course-api.com/images/people/person-3.jpeg',
		text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
	},
];

// Select HTML elements
const authorImg = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');
const btns = document.querySelectorAll('button');

// Set initial review array
let index = 0;

// Declare variable for global access to random review generation
let randomindex;

// Generates and returns a random number based on the length of our reviews array.
function randomIndexGenerator() {
	randomIndex = Math.floor(Math.random() * reviews.length);
	return randomIndex;
}

// This function will update the review on-screen dynamically as the user cycles through them.
function cycleArray() {
	authorImg.src = reviews.at(index).img;
	author.textContent = reviews.at(index).name;
	job.textContent = reviews.at(index).job;
	info.textContent = reviews.at(index).text;
}

// Loads initial array when the page loads, rather than our hard-coded values.
window.addEventListener('DOMContentLoaded', cycleArray);

// Adds an event listener to any element being grabbed by the btns variable. In this case, any <button> element.
btns.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		// Grab the list of classes on the clicked item.
		const actions = e.currentTarget.classList;

		// Checks to seee if the clicked button contains a certain class and then acts differently based on that class.

		// If the btn contains a class of "prev-btn", it will decrease our index, feed that information back to the cycleArray method, and update the review that's on screen.
		if (actions.contains('prev-btn')) {
			index--;
			if (index < 0) {
				index = reviews.length - 1;
			}
			cycleArray();
		}

		// If the btn contains a class of "next-btn", it will increase our index, feed that information back to the cycleArray method, and update the review that's on screen.
		if (actions.contains('next-btn')) {
			index++;
			if (index > reviews.length - 1) {
				index = 0;
			}
			cycleArray();
		}

		// If the btn contains a class of "random-btn", it will calls the randomIndexGenerator to generate a random array index, feed that information back to the cycleArray method, and update the review that's on screen.
		if (actions.contains('random-btn')) {
			randomIndexGenerator();
			index = randomIndex;
			cycleArray();
		}
	});
});
