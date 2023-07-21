# 92. Get Elements By Tag Name

## Quick Summary

HTMLCollection = array-like object.
index and length properties exist, but array methods, like `forEach()` will not work on it.
Instead you will want to use `querySelectorAll()` to get a NodeList of the various nodes of the HTML tag, class, ID, etc. that you specify.
A NodeList can access the `forEach()` method.
From there you can turn them into an array using the spread operator `[...arrayName]` and access any array properties you'd like, or use any available array methods.

## Getting started

Select the element or group of elements that we want. We can then decide what we want to do with that selection. The most basic way to do this is by using the `getElementsByTagName('tagname');`. This will return an array-like object with some similar properties as an array, but not exactly the same.

Consider the following code

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Example</title>
	</head>
	<body style="background-color: #2a2a2a; color: gainsboro">
		<h2>H2 Header One</h2>
		<h2>H2 Header Two</h2>
		<ul>
			<li>Apple</li>
			<li>Orange</li>
			<li>Banana</li>
			<li>Pear</li>
			<li>Tomato</li>
		</ul>
	</body>
</html>
```

**JavaScript**

```js
const headings = document.getElementsByTagName('h2');
headings[0].style.color = 'red';
console.log(headings.length);
```

This code will look inside your HTML for any elements with the `<h2>` tag, then store them in a `const` variable named headings as an "array-like object". The second line then grabs the first item in that "array-like object" and makes it's color red. Lastly, the third line console logs the length o the headings "array-like object" which results in 2.

While you can use this array-like object will respond to `array.index` and `array.length` properties, it will not work with array methods like `array.forEach()`. For this reason, we are better off using the `querySelectorAll()` method to get a NodeList of all items with that tag name.

### What is a NodeList and Node?

A **NodeList** returns an array-like object that is a snapshot of a collection of document nodes, or HTML elements, at the moment you request it. A **node** is simply one of these HTML elements rather than a list of them. This can be a list, heading, or even just text.

## `querySelector()` and `querySelectorAll()`

```js
const items = document.getElementsByTagName('li');
const betterItems = [...items];
betterItems.forEach(function (item) {
	console.log(item);
});

console.log(items);
console.log(betterItems);
```

This will log the following to the console:

```
li
li
li
li
li
HTMLCollection(5) [li, li, li, li, li]
(5) [li, li, li, li, li]
```

We can then target a specific index if we wanted to, for example, change the color of the list item with an index of 2.

```js
betterItems[2.style.color = 'orange'];
```
