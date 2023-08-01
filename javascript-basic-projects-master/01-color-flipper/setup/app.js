const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.querySelector('#btn');
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
let randomColor = '';

function randomSimpleColor() {
	randomColor = '';
	let randomColorIndex = Math.floor(Math.random() * colors.length);
	randomColor = colors[randomColorIndex];
	return colors[randomColorIndex];
}

btn.addEventListener('click', function () {
	body.style.backgroundColor = randomSimpleColor();
	colorSpan.textContent = randomColor;
});
