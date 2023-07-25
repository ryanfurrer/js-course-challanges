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
