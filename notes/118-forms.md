# 118. Forms

- Listen for form submit events via `eventListener()`
- Prevent the default behavior of forms
- How to get the values from inputs

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
	<form action="" id="form">
		<input type="text" id="name">
		<input type="password" id="password">
		<input type="submit" id="submit">
	</form>
		<script src="app.js"></script>
	</body>
</html>

```

## `submit` Event Listener

```js
const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
	console.log('form submitted');
});
```

By default when we submit a form, we would be sending to a server vi the form's action attribute. But to handle it on the front end, we need to prevent the default behavior of the form.

```js
const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	console.log('form submitted');
});
```

Now the page will not reload upon form submittal and we can see our `console.log`.

## Access input value

Using the value property on the inputs.

```js
const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	console.log('form submitted');
	console.log(name.value);
	console.log(password.value);
});
```

The above code will fire when information is submitted to to the form and will log the value of the name and password inputs to the console.
