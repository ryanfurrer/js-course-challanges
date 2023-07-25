# 116. Event Propagation - Bubbling & Capturing

- Allows you to select dynamic elements.
  - Elements we add via JavaScript
- **Event Propogation** - the order the events are fired.
- **Event Bubbling** - default. Started with the clicked element then bubbles up.
- **Event Capturing** - Same as bubbling, but it fires at the root and fires until it reaches the target.

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
		<div class="container">
			<ul class="list-items">
				<li class="item"><a href="#" class="link">Link</a></li>
				<li class="item"><a href="#" class="link">Link</a></li>
				<li class="item"><a href="#" class="link">Link</a></li>
			</ul>
		</div>
		<script src="app.js"></script>
	</body>
</html>
```

## Targeting Dynamic Elements

```js
const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e) {
	console.log('current target', e.currentTarget);
	console.log('target', e.target);
}

container.addEventListener('click', showBubbling);
list.addEventListener('click', showBubbling);
```

The JavaScript above will output the current target of your `eventListner` as well as the _actual_ target the event is firing on.

**Output in console**

```html
current target
<ul class="list-items">
	...
</ul>
target <a href="#" class="link">Link</a>
current target
<div class="container">...</div>
target <a href="#" class="link">Link</a>
```

Next, we can use an `if` statement to do something _if_ the element clicked contains a class of `link`.

```js
const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e) {
	console.log('current target', e.currentTarget);
	console.log('target', e.target);
	if (e.target.classList.contains('link')) {
		console.log('you clicked on the link');
	}
}

list.addEventListener('click', showBubbling);
container.addEventListener('click', showBubbling);
document.addEventListener('click', showBubbling);
window.addEventListener('click', showBubbling);
```

### Preventing the bubble up

In the case that you want to prevent the event bubbling the entire way up the DOM, you can use `stopPropagation()` to do so. Remember, by default any event fired off by an interaction is bubbled up the entire DOM.

```js
const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e) {
	console.log('current target', e.currentTarget);
	// console.log('target', e.target);
	// if (e.target.classList.contains('link')) {
	// 	console.log('you clicked on the link');
	// }

	function stopPropagation(e) {
		e.stopPropagation();
	}
}

container.addEventListener('click', showBubbling);
list.addEventListener('click', showBubbling);
document.addEventListener('click', showBubbling);
window.addEventListener('click', showBubbling);
```

### Using Event Capturing

In order to use Event Capturing, we would add a third argument to our `addEventListner` function; `{ capture: true}`.

```js
const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e) {
	console.log('current target', e.currentTarget);
	// console.log('target', e.target);
	// if (e.target.classList.contains('link')) {
	// 	console.log('you clicked on the link');
	// }

	function stopPropagation(e) {
		e.stopPropagation();
	}
}

container.addEventListener('click', showBubbling, { capture: true });
list.addEventListener('click', showBubbling, { capture: true });
document.addEventListener('click', showBubbling, { capture: true });
window.addEventListener('click', showBubbling, { capture: true });
```

## 117. Event Propagation Example

Below is an example of how we can use **Event Propagation** to dynamically add event listeners to dynamically added content.

The code below has an `<h1>` and a `<button>`. When you click on the `<h1>` it should log a message to the console. When you click on the `<button>` it should create a new heading.

By using the `if` statment inside the `container.addEventListener()` we can target elements that were added via JavaScript _after_ the initial page load.

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
		<div class="container">
			<h1 class="heading">I'm sitting inside the container div.</h1>
		</div>
		<button class="btn">click me</button>
		<script src="app.js"></script>
	</body>
</html>
```

#### JavaScript

```js
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const heading = document.querySelector('.heading');

function sayHello() {
	console.log('Hello there');
}

btn.addEventListener('click', function () {
	const element = document.createElement('h1');
	elemnt.classList.add('heading');
	element.textContent = `I'm added to the container`;
	container.appendChild(element);
});

container.addEventListener('click', function (e) {
	if (event.target.classList.contains('heading')) {
		console.log('Hello there from the dynamically added heading!');
	}
});

// heading.addEventListener('click', sayHello);
```
