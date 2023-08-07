// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navList = document.querySelector('.links');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', function () {
	navList.classList.toggle('show-links');
});
