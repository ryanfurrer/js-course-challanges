# 101. classList and className

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>DOM</title>
	</head>
	<body style="background-color: #2a2a2a; color: gainsboro">
		<h1 id="first" class="colors">I'm first element</h1>
		<h1 id="second">I'm second element</h1>
		<h1 id="third">I'm third element</h1>
		<script src="app.js"></script>
	</body>
</html>
```

```js
const first document.getElementByID('first');
const second document.getElementByID('second');
const third document.getElementByID('third');
```

## `className`

Returns the HTML class of the selected element. This will also allow you to add a class on that element. However, this can only manage one class at a time. If you put assign _another_ className a few lines later, it will overwrite the one you did earlier. `classList` allows us to circumvent this.

**This is largely depreceated with `classList` existing.**

```js
const classValue = first.className;
console.log(classValue); // Logs "colors"

second.className = 'colors'; // Adds "colors" class to the HTML element
second.className = 'text'; // Removes "colors" class from the HTML element, and replaces it with "text"
```

## `classList`

Returns a collection containing the HTML classes of a targeted element. Accepts properties such as `add`, `remove`, `toggle`, and more. [Read more](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) at the MDN.

```js
third.classList.add('colors'); // Adds class of "colors" to the element
const classValue = third.classList;
console.log(classValue); // Logs a collection, an array-like object, of the classes on the targeted element.
```

`classList` can also be used to manipulate more than one class at once.

```js
third.classList.add('text, colors');
```

### `classList.contains()`

```js
let result = third.classList.contains('text');
if (result) {
	console.log('This contains the class text');
} else {
	console.log('This does not contain the class text');
}
```
