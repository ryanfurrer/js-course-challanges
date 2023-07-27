# 119. Local Storage

- Web Storage API - provided by the browser
- Session Storage and Local Storage:
  - **Session Storage** - only persists date while the tab is open.
  - **Local Storage** - data persists through closing of web browser.
  - Store data using `key: value` pairs
- **Methods available**:
  - `setItem`
  - `getItem`
  - `removeItem`
  - `clear`

### Code Examples:

```js
localStorage.setItem('name', 'John');
sessionStorage.setItem('name', 'John');

It is important to note that using the same `key` name will overwrite the previous value.

```

#### Setting values

```js
localStorage.setItem('name', 'ryan');
localStorage.setItem('friend', 'anthony');
localStorage.setItem('job', 'buyer');
localStorage.setItem('address', '123 main street');
```

#### Getting values

```js
const name = localStorage.getItem('name');
console.log(name); // Should output ryan
```

#### Removing one item at a time

```js
localStorage.removeItem('name');
```

If removed from `localStorage` you cannot access it until you set another item using `setItem()`.

#### Remove entire `localStorage`

```js
localStorage.clear();
```

Removes _all_ keys and values.

# 120. Local Storage with Multiple Values

- `JSON.stringify()` - Converts a JavaScript value to a JSON string.
- `JSON.parse()` - Turns a JSON string into the appropriate JavaScript value or object such as number, array, object, boolean, etc.

```js
const friends = ['john', 'peter', 'bob'];

localStorage.setItem('friends', friends); // Attempts to store a key item of "friends" as the array "friends"

const values = localStorage.getItem('friends');
console.log(values[0]); // Logs only 'j' since the "friends" array is not being stored as an array in localStorage
```

#### Why does this happen?

> While developing an application using JavaScript, many times it is needed to serialize the data to strings for storing the data in a database or for sending the data to an API or web server. The data has to be in the form of strings.

See more on [GeeksforGeeks](https://www.geeksforgeeks.org/javascript-json-stringify-method/)

#### How can we fix this?

Using `JSON.stringify()` followed by `JSON.parse()`~

```js
const friends = ['john', 'peter', 'bob'];

localStorage.setItem('friends', JSON.stringify(friends)); // Now friends is being stored in localStorage as an array

const values = JSON.parse(localStorage.getItem('friends')); // Nowe we can properly access the items using square bracket notation
console.log(values[0]); // Outputs "john"
```

## How to check if value is already in localStorage

```js
let fruits; // create an empty variable
// next we'll check if the value exists in localStorage. if so, assign it to our variable; if not, assign variable to an empty array

if (localStorage.getItem('fruits')) {
	fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
	fruits = [];
}

// You can also use a ternary operator for the above `if` statement

console.log(fruits); // Logs as an empty array
fruits.push('apple'); // adds "apple" to the fruits array
localStorage.setItem('fruits', JSON.stringify(fruits)); // turns the previuosly JSON.parsed variable into a JSON string for localStorage.
```
