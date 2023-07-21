# 99. textContent and nodeValue

- `nodeValue`
- `textContent`

Both return a text value that is within your selected element.

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
		<h1 id="special">This is special content!</h1>
		<script src="app.js"></script>
	</body>
</html>
```

## `nodeValue`

`nodeValue` can be a bit trickier as you have to jump through a couple of more hoops to get the value you are looking for.

```js
const item = document.getElementByID('special');
const value = item.nodeValue;
console.log(value); // This will return "null"
console.log(item.childNodes); // Now we must look for our text within the NodeList
console.log(item.childNodes[0].nodeValue); // This will console.log the actual text content of your selected node
```

## `textContent`

By comparison, the `textContent` lets you jump straight to what you are looking for.

```js
const item = document.getElementByID('special');
const easyValue = item.textContent;
console.log(easyValue); // This will console.log the actual text content of your selected node
```
