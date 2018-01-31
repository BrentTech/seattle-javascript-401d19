given a string return a new string with the order of characters reversed

## Classic Solution
```javascript
function reverseStr(str) {
  let result = ""

  // run a for loop backwards and copy each character
  for (let i = str.length - 1; i >= 0; i-- {
    result += str[i];
  }

  return result;
}
```

## Solutions that "cheat" by calling .reverse()
The next solution cheats by turning the string into an array.  It's handy and
practical and something you should use on a personal project, or at work, but
never during an interview. If this were your solution in an interview
the interviewer might ask you to not turn it into an array, or ask you to prove that
you know how to reverse an array without calling `.reverse()` -- in which case,
you'd then need to be able to write the first solution above.

```javascript
// first turn string into array
// call reverse() on the array
// join the array back into a string
// return the result

const reverseStr = (str) => {
  let arr = str.split('');
  return arr.reverse().join('');
}

reverseStr('izabella'); // prints 'allebazi'
```

```javascript
// this method is the same but fancier

const reverseStr = (str) => str.split('').reverse().join('');

reverseStr('izabella'); // prints 'allebazi'
```
```javascript
// this method uses a for loop (for of syntax)
// can't use this syntax to loop through every 'so' many elements (third, fifth, sixth)

const reverseStr = (str) => {
  let reversed = '';

  for(let character of str){
    reversed = character + reversed;
  }
  return reversed;
}
reverseStr('izabella'); // prints 'allebazi'
```
```javascript
// this method is my favorite and super fancy
// this last method will use a complicated array helper

const reverseStr = (str) => return str.split('').reduce((a, c) => c + a, '');
  // takes all the values of the array and condenses them into one singular value

reverseStr('javascript'); // prints 'tpircsavaj'
```
