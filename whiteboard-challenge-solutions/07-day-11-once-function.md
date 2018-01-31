Write a function that takes a function as its only argument and returns a new function.

This new function can be called an infinite amount of times, but it will only execute the original function on the first call

``` Javascript
let once = (fn) =>  {
  let done = false
  return (...args) => {
    if(done) return
    done = true
    return fn(...args)
  }
}
```
