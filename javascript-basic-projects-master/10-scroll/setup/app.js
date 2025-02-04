// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const footerDate = document.querySelector('#date');
footerDate.innerText = new Date().getFullYear().toString();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

const containerHeight = linksContainer.getBoundingClientRect().height;
const linksHeight = links.getBoundingClientRect().height;

navToggle.addEventListener('click', function () {
	if (containerHeight === 0) {
		linksContainer.style.height = `${linksHeight}px`;
	} else {
		linksContainer.style.height = 0;
	}
});

// ********** fixed navbar ************
const navbar = document.querySelector('#nav');
const navbarHeight = navbar.getBoundingClientRect().height;
const header = document.querySelector('#home');
const headerHeight = header.getBoundingClientRect().height;
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
	if (window.scrollY > navbarHeight) {
		navbar.classList.add('fixed-nav');
	} else {
		navbar.classList.remove('fixed-nav');
	}

	if (window.scrollY > headerHeight) {
		topLink.classList.add('show-link');
	} else {
		topLink.classList.remove('show-link');
	}
});

// ********** smooth scroll ************
// select links
