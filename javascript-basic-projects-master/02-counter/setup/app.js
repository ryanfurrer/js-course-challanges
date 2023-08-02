let valueSpan = document.querySelector('#value');
let value = valueSpan.value;
value = 0;
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');

function setColorValue() {
	valueSpan.textContent = value;

	if (value < 0) {
		valueSpan.style.color = 'red';
	} else if (value > 0) {
		valueSpan.style.color = 'green';
	} else {
		valueSpan.style.color = 'initial';
	}
}

function decreaseCounter() {
	value--;
	setColorValue();
}

function resetCounter() {
	value = 0;
	setColorValue();
}

function increaseCounter() {
	value++;
	setColorValue();
}

decreaseBtn.addEventListener('click', decreaseCounter);
resetBtn.addEventListener('click', resetCounter);
increaseBtn.addEventListener('click', increaseCounter);

setColorValue();

// Instructor Solution
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

value.textContent = count;

btns.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		const styles = e.currentTarget.classList;
		if (styles.contains('decrease')) {
			count--;
		} else if (styles.contains('increase')) {
			count++;
		} else {
			count = 0;
		}
		if (count < 0) {
			value.style.color = 'red';
		}
		if (count > 0) {
			value.style.color = 'green';
		}
		if (count === 0) {
			value.style.color = 'initial';
		}
		value.textContent = count;
	});
});
