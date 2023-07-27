# 121. setTimeout()

- Runs a function once after a set length of time

### Summary

- Requires a function be passed as a reference
- Timeout duration is in ms (1000ms = 1 second)
  - Default timeout duration is 0
- Returns a unique identifier
- Use `clearTimeout()` to cancel
- Stored on window objectm, therefore it is a global function
- See more on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

```js
function sayHello() {
  console.log('Hello John');
}

setTimeout(sayHello,1000ms);
```

The code above declares a basic function that outputs a string to the console after 1000ms (1 second).

We can also set up the function diredctly in the `setTimeout()` method.

```js
setTimeout(function() {
  console.log('Hello John 2');
}, 2000ms)
```

#### Passing in an argument with `setTimeout()`

Any arguments you want to pass come after the timer duration when you call `setTimeout()`

```js
function showScore(name, score) {
	console.log(`Hello ${name}, your score is ${score}`);
}

setTimeout(showScore, 1000, 'John 3', 55);
```

## Unique Identifiers and `clearTimeout`

- Every `setTimeout()` method you use logs a unique identifier to the console such as 1, 2, 3, etc.
- You can use `clearTimeout()` to _not_ run a functio you previously setup with `setTimeout()`

```js
function showScore(name, score) {
	console.log(`Hello ${name}, your score is ${score}`);
}

const firstID = setTimeout(showScore, 1000, 'John', 34);
const secondID = setTimeout(showScore, 1000, 'Peter', 88);

console.log(firstID); // Unique identifier = 1
console.log(secondID); // Unique identifier = 2

clearTimeout(firstID); // Stops the above `console.log(firstID)` from running
```

## 122. setInterval()

- Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
- Very similar to `setTimeout()`

### Summary

- Requires a function be passed as a reference
- Timeout duration is in ms (1000ms = 1 second)
  - Default timeout duration is 0
- Returns a unique identifier
- Use `clearInterval()` to cancel
- See more on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

```js
function showScore() {
	console.log('Hello');
}

setInterval(showScore, 2000);
```

The code above will run the `showScore` function every 2000ms (2 seconds)

#### Using arguments

```js
function showScore(name, score) {
	console.log(`Hello ${name}, your score is ${score}`);
}

setInterval(showScore, 1000, 'Bobo', 45);
```

The above code accepts two arugments, `name`, and `score`, then outputs them into the console every second.

#### `clearInterval()`

```js
function showScore(name, score) {
	console.log(`Hello ${name}, your score is ${score}`);
}

const firstID = setInterval(showScore, 1000, 'Bobo', 45);
const secondID = setInterval(showScore, 1000, 'Sudan', 88);

console.log(firstID);
console.log(secondID);

clearInterval(firstID); // Stops the firstID from firing
```
