# 125. Events - scroll

The Javascript `scroll` event can be listened to on the [element](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll) or the [document](https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll).

`element.scroll()` scrolls the selected element to a particular set of coordinates as pixels inside a given element.

`window.scroll()` scrolls the window to a particular place in the document.

Both options accemt different parameters which may be passed as individual values or an object using `options`.

## Code Examples

#### `element.scroll()`

```js
// Using parameters
element.scroll(0,1000); // The first parameter is the x-coordinate, the second is the y-coordinate.

// Using options
element.scroll({
  top: 100,
  left: 100,
  behavior: "smooth";
})
```

#### `window.scroll()`

```js
// Using parameters
window.scroll(0,1000); // The first parameter is the x-coordinate, the second is the y-coordinate.

window.scroll({
  top: 100,
  left: 100,
  behavior: "smooth";
})
```

```js
window.addEventListener('scroll', function () {
	console.log(window.scrollY + 'px');
	console.log(window.scrollX + 'px');
});
```

The code above will display how many pixels we've scrolled on either axis.

#### `scrollY`

`scrollY` returns the number of pixesl the document is currently scrolled along the vertical axis (`pageYOffset` _decpreceated_)

#### `scrollX`

`scrollX` returns the number of pixesl the document is currently scrolled along the horizontal axis (`pageXOffset` _decpreceated_)

```js
window.addEventListener('scroll' function() {
  console.log('Hello');
})
```

The code above will fire and log "Hello" to the console any time we scroll on either axis.
