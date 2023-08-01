const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('#btn');
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
let randomColor = '#';

function randomHexColor() {
	randomColor = '#';
	for (i = 0; i < 6; i++) {
		let randomIndex = Math.floor(Math.random() * hex.length);
		randomColor += hex[randomIndex];
	}
	return randomColor;
}

btn.addEventListener('click', function () {
	randomHexColor();
	body.style.backgroundColor = `${randomColor}`;
	colorSpan.textContent = randomColor;
});
