# Find Closest Point
Write a function called `closestPoint` that accepts a list of points and
a current location and returns the closest point to the given location.


### Example Input

```js
const randCoord = () => (100 * Math.random())
const randPoint = () => ({x: randCoord(), y: randCoord()})
let points = [randPoint(), randPoint(), randPoint(), randPoint()]
let location = randPoint()
let closest = closestPoint(points, location)

console.log('  POINTS:', points)
console.log('LOCATION:', location)
console.log(' CLOSEST:', closest)
```

[Solution](./24-day-38-find-closest-point.js)
