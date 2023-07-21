# 100. `getAttribute()` and `setAttribute()`

Allows us to get or set attributes such as class, id, href, etc. of elements you select.

- `getAttribute()`
- `setAttribute()`

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
		<ul>
			<li class="first" id="special">I have a class of first</li>
			<a href="first.html" id="id">Random Link</a>
			<li>I have no attributes</li>
		</ul>
		<script src="app.js"></script>
	</body>
</html>
```

#### JavaScript

```js
const first = document.querySelector('.first');
const idValue = first.getAttribute('id');
console.log(idValue); // Logs "special"

const link = document.getElementByID('link');
const showLink = link.getAttribute('href');
console.log(showLink); // Logs the href value of your selected element. In this case it logs "first.html"

// Next we'll find the last element, in this case an <li> without any attributes, and then we'll set an attribute to it.
const last = link.nextElementSibling; // Grabs next element sibling below the link
last.setAttribute('class', 'first'); // Sets a class attribute of "first" to the selected element
last.textContent = `I also have a class of first.`; // This will change the text rendered on the screen for the selected element.

const links = document.querySelectorAll('.first');
console.log(links); // Logs a NodeList of any elements with the class of "first"
```
