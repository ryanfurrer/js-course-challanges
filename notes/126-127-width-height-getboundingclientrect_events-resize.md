# 126. Width, Height, GetBoundingClientRect

- `innerWidth` - The read-only window property the ineteior wide of the window in pixels.
- `innerHeight` - The read-only property of the window interace returns the interior height of the window in pixels.
- `element.getBoundingClientRect()` - a JavaScript method that returns a DOMRect object providing information about the isze of an eleemnt and it's position relative to the viewport.
  - Information returned includes but is not limited to: `top`, `right`, `height`, `width`, and more.

```js
console.log(`height: ${window.innerHeight}`);
console.log(`width: ${window.innerWidth}`);
```

The code above will log the _current_ height and width of the browser window to the console.

### `element.getBoundingClientRect()`

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>DOM</title>
		<style>
			.btn {
				margin: 1rem;
				font-size: 1.5rem;
			}
			.box {
				margin: 1rem;
				margin-left: -3rem;
				width: 150px;
				height: 150px;
				background: red;
			}
		</style>
	</head>
	<body>
		<h1>JavaScript</h1>
		<button class="btn">Click Me</button>
		<div class="box"></div>
	</body>app.js"></script>
	</body>
</html>

```

```js
const btn = document.querySelector('.btn');
const box = document.querySelector('.box');
btn.addEventListener('click', function () {
	const values = box.getBoundingClientRect();
	console.log(values);
});
```

# 127. Events - "Resize"

- Fires when the document view (window) has been resized.

```js
window.addEventListener('resize', function () {
	console.log(window.innerWidth());
});
```

The code above returns the exact width (in pixels) of the browser window whenver it is resized.
