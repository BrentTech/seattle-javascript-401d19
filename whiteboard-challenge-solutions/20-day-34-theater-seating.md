# Theater Seating: Count People Shorter
- you’re given a 2D array of seats and people’s heights
- people’s heights are written either like `"72 inches"` or `"5 feet 2 inches"`
- you’re given one persons seat coordinate (row, col)
- return how many people they are blocking
  - consider blocking to be anyone shorter sitting behind them
  - ignore other tall people behind them
- index zero represents the front of the theater
- access seats like seats[row][col]

### Dealing with empty seats

You may choose to assume any of the following about empty seats in the theater:

- assume the theater is always full
- or, assume empty seats are filled with `null`
- or, assume empty seats are filled with `undefined`
- or, assume empty seats are filled with the string `"empty"`

```js
function numBlocking(seats, row, col) {
  let myHeight = getHeightAt(seats, row, col)
  let total = 0

  for (let i = row + 1; i < seats.length; i++) {
    if (getHeightAt(seats, i, col) < myHeight) {
      total++
    }
  }

  return total
}

function getHeightAt(seats, row, col) {
  let str = seats[row][col]
  let cells = str.split(" ")

  let feet = 0
  if (str.includes("feet")) {
    feet = parseInt(cells[0], 10)
  }

  // inches are always the second to last thing in the split array
  let index = cells.length - 2
  let inches = parseInt(cells[index], 10)
  
  return inches + 12 * feet
}

let SEATS = [
  [ '1 feet 11 inches', '4 feet 8 inches', '2 feet 10 inches', '3 feet 5 inches', '2 inches', '3 inches', '11 inches' ],
  [ '5 feet 10 inches', '9 inches', '3 feet 5 inches', '3 inches', '9 inches', '1 feet 0 inches', '0 inches' ],
  [ '0 feet 5 inches', '5 feet 9 inches', '6 feet 1 inches', '1 inches', '1 inches', '5 feet 3 inches', '3 feet 5 inches' ],
  [ '1 inches', '0 feet 11 inches', '2 feet 5 inches', '5 feet 6 inches', '6 feet 6 inches', '6 inches', '5 feet 11 inches' ],
  [ '10 inches', '11 inches', '3 inches', '5 feet 2 inches', '9 inches', '4 inches', '1 feet 10 inches' ],
  [ '2 feet 10 inches', '11 inches', '7 inches', '2 feet 9 inches', '0 inches', '9 inches', '0 feet 2 inches' ],
  [ '3 inches', '1 inches', '5 feet 5 inches', '6 inches', '2 inches', '5 feet 7 inches', '8 inches' ]
]

// prints 3
console.log("Blocking:", numBlocking(SEATS, 1, 4))
```
