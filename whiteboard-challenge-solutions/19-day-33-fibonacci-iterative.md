the fibonacci series is an ordering of numbers where each number is the sum of the preceeding two.

print out the nth entry in the fibonacci series, recursive

ex: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series

ex: fib(4) === 3

why NOT to use recursion to solve fibonacci...
because of runtime complexity. It takes way more time / space to solve this problem recursively than iteratively.

```javascript
const fib = (n) => {
  let result = [0, 1];

  for(let i = 2; i <= n; i++) {
    let a = result[i - 1];
    let b = result[i - 2];

    result.push(a + b);
  }
  return result[n];
  // or return result[result.length - 1];
}

fib(3) // prints 2
fib(6) // prints 8
fib(7) // prints 13
fib(8) // prints 21
```
