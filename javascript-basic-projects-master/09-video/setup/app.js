// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// const video = document.querySelector('video');
// const switchBtn = document.querySelector('.switch-btn');
// const switchSpan = document.querySelector('.switch');
// const spans = switchBtn.querySelectorAll('span');

// span.addEventListener('click', function (e) {
// 	const currentTarget = e.currentTarget.innerText;
// 	alert(currentTarget);
// });

// spans.forEach(function (span) {
// 	span.addEventListener('click', function (e) {
// 		// alert(e.currentTarget.innerText);
// 		if ((span.innerText = 'pause')) {
// 			switchSpan.style.left = '50%';
// 			// switchSpan.style.right = '50%';
// 		}
// 		if ((span.innerText = 'play')) {
// 			switchSpan.style.left = '0%';
// 		}
// 	});
// });

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');

// pause/play video
btn.addEventListener('click', function () {
	if (!btn.classList.contains('slide')) {
		btn.classList.add('slide');
		video.pause();
	} else {
		btn.classList.remove('slide');
		video.play();
	}
});

window.addEventListener('load', function () {
	preloader.classList.add('hide-preloader');
});
