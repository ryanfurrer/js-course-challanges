# 123. Events - DomContentLoaded

The `DOMContentLoaded` event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

See more at [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event)

**Listens on the `window` object, but you can also write it to the `document` object**

- `window.addEventListener('DOMContentLoaded', ...)`
- `document.addEventListener('DOMContentLoaded', ...)`

We can add use this in the following syntax:

```js
window.addEventListener('DOMContentLoaded', function () {
	// enter code of function here.
});
```

**You do not have to use an anonymous function; this will work just as well with a function previously declared or even an arrow function**

### Code examples

```js
window.addEventListener('DOMContentLoaded', function () {
	console.log('Hello');
});
```

Logs "Hello" to the console as soon as the HTML loads.

```js
window.addEventListener('DOMContentLoaded', function () {
	const heading = document.querySelector('h1');
	console.log(heading);
	heading.style.color = 'red';
});
```

This will add the CSS style attribute `color` as inline styling to the first `<h1>` the browser finds on the page. This is done as soon as the page loads and before any other CSS stylesheets, images, subframes, and other scripts.

Depending on specificity and the cascade (CSS) this may result in your styles changed in JavaScript being overriden after the rest of the resources load.
