# 95. Navigate the DOM - Children

Traverse the DOM tree when looking for children nodes. There are several methods for this such as `.childNodes`, `.children`, `.firstChild`, and `.lastChild`

While `.children` returns only the _actual_ child nodes, such as `<li>` being a child of a `<ul>`, `.childNodes`, `.firstChild`, and `.lastChild` all return the actual child nodes as well as returning white space, or in a list's case, line breaks, and child nodes as well.

```js
const result = document.querySelector('#result');
const children = result.children;
console.log(children);
```
