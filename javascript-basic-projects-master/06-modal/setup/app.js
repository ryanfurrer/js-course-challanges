// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openModalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.close-btn');

openModalBtn.addEventListener('click', function () {
	modalOverlay.classList.toggle('open-modal');
});
closeModalBtn.addEventListener('click', function () {
	modalOverlay.classList.remove('open-modal');
});
