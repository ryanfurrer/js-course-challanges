# 97. Navigate the DOM - nextSibling, previousSibling

- `previousSibling`
- `nextSibling`
- `return whitespace`

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
		<ul id="result">
			<li class="first">frist</li>
			<li>list item 2</li>
			<li>list item 3</li>
			<li id="last">last</li>
		</ul>
		<script src="app.js"></script>
	</body>
</html>
```

```js
const first = document.querySelector('.first'); // Grabs an HTML element with the class "first"
const second = first.nextSibling; // Stores the sibling after the one with a class of "first". In this case, that is <li>list item 2</li>
second.style.color = 'red'; // Changes the color to red
const last = document.querySelector('#last');
const third = last.previousSibling; // Stores the sibling before the one with an id of "last"
```

If you look for a sibling that does not exist, it will return "null".

## 98. Navigate the DOM - nextElementSibling, previousElementSibling

In order to grab the next element immediately, we can use the `previousElementSibling` and `nextElementSibling`. In this case, you do not have to worry about the whitespace between elements.

```js
const first = document.querySelector('.first');
first.nextElementSibling.style.color = 'red';
const last = document.querySelector('#last');
```
