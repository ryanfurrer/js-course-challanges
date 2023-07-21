# 96. Navigate the DOM - parentElement

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
		<div class="result">
			<h1>Hello World</h1>
			<div class="second">
				<h2>Second Heading</h2>
			</div>
		</div>
		<script src="app.js"></script>
	</body>
</html>
```

```js
const heading = document.querySelector('h2');
console.log(heading.parentElement); // Returns the <div> with a class of "second"
console.log(heading.parentElement.parentElement); // Returns the <div> with a class of "result"
console.log(heading.parentElement.parentElement.parentElement); // Returns the <html> element
```

If you run out of parent elements, it will return "null"
