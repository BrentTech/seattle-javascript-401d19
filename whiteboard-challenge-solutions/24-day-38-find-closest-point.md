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

```js
const randCoord = () => (100 * Math.random())
const randPoint = () => ({x: randCoord(), y: randCoord()})
let points = [randPoint(), randPoint(), randPoint(), randPoint()]
let location = randPoint()
let closest = closestPoint(points, location)

console.log('  POINTS:', points)
console.log('LOCATION:', location)
console.log(' CLOSEST:', closest)

function closestPoint(points, location) {
  // sample the data to get initial closest point
  let minDistance = distance(points[0], location)
  let bestIndex = 0

  points.forEach((point, i) => {
    let currentDistance = distance(point, location)
    if (currentDistance < minDistance) {
      minDistance = minDistance
      bestIndex = i
    }
  })

  return points[bestIndex]
}

function distance(p1, p2) {
  let dx = p2.x - p1.x
  let dy = p2.y - p1.y
  let length = Math.sqrt(dx * dx + dy * dy)
  return length
}
```
