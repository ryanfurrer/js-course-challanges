# 86. Math Object

### Standard built-in objects - always available

## Math.floor()

Rounds a given number down to a whole number. Does not resepct being over/under .5.

```js
const number = 4.56789;
const result = Math.floor(number);
console.log(result); // outputs 4
```

## Math.ceiling()

Rounds a given number up to the nearest whole number. Does not resepct being over/under .5.

```js
const number = 4.56789;
const result = Math.ceiling(number);
console.log(result); // outputs 5
```

## Math.sqrt();

Provides the square root of a given number.

```js
const number = 25;
const result = Math.sqrt(number);
console.log(result); // outputs 5
```

## Math.PI

Gives value of PI up to 15 decimal points

```js
const result = Math.PI;
console.log(result); // outputs 3.141592653589793
```

## Math.min()

Outputs the smallest number in a given range

```js
const result = Math.min(5, 10, 15, 20);
console.log(result); // outputs 5
```

## Math.max()

Outputs the largest number in a given range

```js
const result = Math.max(5, 10, 15, 20);
console.log(result); // outputs 20
```

## Math.random()

Outputs a random number between 0 and 0.9, repeating of course; Will not return 1 or higher by default.

```js
const result = Math.random();
console.log(result);
```

In order to get a number higher than 0.9, we can add or multipy `Math.random()`.

```js
const result = Math.random() * 10;
console.log(result); // returns a random number between 1 and 10 with decimal points.
```

We can combine `Math.random()` with `Math.floor()` to get whole numbers.

```js
const result = Math.floor(Math.random() * 10);
console.log(result); // returns a random number between 0 and 9.
```

However, the problem now is that we will get a number between 0 and 9, since `Math.random()` starts at 0. We can alleviate this by using `Math.ceiling()` or by adding 1 to our existing formula.

#### Adding 1 to our existing formula

```js
const result = Math.floor(Math.random() * 10 + 1);
console.log(result); // returns a random number between 0 and 9, then adds one to give us a random number between 1 and 10.
```

#### Using `Mail.ceil()`

```js
const result = Math.ceil(Math.random() * 10);
console.log(result); // returns a random number between 1 and 10.
```
