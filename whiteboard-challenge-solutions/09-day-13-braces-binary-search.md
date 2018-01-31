# Problem 1 - Bracket Matching
Write a function `checkBraces()` to examine whether the pairs and the orders of
`{`, and `}` are correct in a string.

For example:

* `checkBraces("")` returns `true`
* `checkBraces("{}")` returns `true`
* `checkBraces("{{{}}}")` returns `true`
* `checkBraces("{}{mario}{{GREGOR AND THE HOUND}}")` returns `true`

* `checkBraces("{")` returns `false`
* `checkBraces("}")` checkBraces returns `false`
* `checkBraces("{{}")` returns `false`

```javascript
'use strict'

const checkBraces = (text) => {
  let stack = []
  for(let i=0;i<text.length; i++){
    let ch = text[i]
    if(ch === '{')
      stack.push(ch)
    if(ch ===  '}')
      if(stack.pop() !== '{')
        return false
  }
  return  stack.pop() ? false : true
}
```

# Problem 2 - Array Binary Search
Implement binary search in a **sorted** numeric array.

* [Wikipedia: Binary Search Algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm#Algorithm)
