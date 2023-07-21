# Date

Similar to `Math`, `Date` is a global object.

### Basic functionality

```js
const date = new Date();
console.log(date);
```

This will output the following information:

- Day of week
- Month
- Day of month
- Year
- Time formatted as `hours:minutes:seconds`
- GMT timezone
- Timezone (Eastern Standard Time, Pacific Daylight Time, etc.)

### `date.getMonth()`

Outputs an index of the current month.

```js
const date = new Date();
const month = date.getMonth();
console.log(month);
```

The result may be a number lower than you expect, since JavaScript is a 0-index language. 0. January

1. February
2. March
3. April
4. May
5. June
6. July
7. August
8. September
9. October
10. November
11. December

In order to output a string of the actual month, rather than an array index number, we must provide a `months` array for it to access.

```js
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const date = new Date();
const month = date.getMonth();
console.log(months[month]); // Returns a string of the current month from the months array.
```

### `date.getDay()`

Returns an index of the current day of the week. Remember that it is 0-index based, since JavaScript is a 0-index language.

```js
const day = date.getDay();
```

In order to get a string of the actual day, we must provide an array for it to reference and access.

```js
const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const day = date.getDay();
console.log(days[day]);
```

### `date.getDate()`

Returns the actual date of the month as an integer; no extra work needed.

```js
console.log(date.getDate());
```

### `date.getFullYear()`

Returns the current year as an integer; no extra work needed.

```js
console.log(date.getYear());
```

## Putting It All Together

We can use everything above to output a string containing the date.

```js
const sentence = `${days[day]}, ${date.getDate()} ${
	months[month]
} ${date.getFullYear()}`;
console.log(sentence);
```

This will output a sentence such as "Thursday, 20 July 2023"

Lastly, we can display this on the webpage by injecting it into the DOM.

```js
const sentence = `${days[day]}, ${date.getDate()} ${
	months[month]
} ${date.getFullYear()}`;
console.log(sentence);
document.body.innerHTML = sentence;
```
