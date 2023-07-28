# 124. Events - load

The `load` event is fired whne the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images. This is in contrast to `DOMContentLoaded`, which is fired as soon as teh page DOM has been loaded, without wating for resources to finish loading.

**This event is not cancelable and does not bubble**

See more at [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)

See more [personal notes](/notes/123-events-dom-content-loaded.md)

**Listens on the `window` element**

### Basic syntax

```js
window.addEventListener('load', function () {
	// your code goes here
});
```

Like `DOMContentLoaded`, `load` will accept an anonymous function, an arrow function, or a previously declared function (using Function Declaration).

## Code Examples

```js
window.addEventListener('load', function () {
	const img = document.querySelector('img');
	console.log(img);
	console.log(img.width);
});
```

The code above will look for the first `<img>` element and then log the `img` itself, as well as the width of it, which is set on every `img` element.

### `load` v.s. `DOMContentLoaded`

#### `load`

```js
window.addEventListener('load', function () {
	console.log('load: I will run second');
	const img = document.querySelector('img');
	console.log(img);
	console.log(img.width);
});
window.addEventListener('DOMContentLoaded', function () {
	console.log('DOMContentLoaded: I will run first');
	const img = document.querySelector('img');
	console.log(img);
	console.log(img.width);
});
```

The code above will console log in the following order:

1. DOMContentLoaded: I will run first
2. load: I will run second

This is because `DOMContentLoaded` loads _as soon_ as the HTML is loaded; it waits for nothing else. `load` on the other hand waits for the DOM, stylesheets, scripts, and every other dependent file has loaded.
