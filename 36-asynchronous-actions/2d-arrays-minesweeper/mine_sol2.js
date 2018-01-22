let MINEFIELD = [
  [null, null, null, null, 'bomb'],
  [null, null, null, null, 'bomb'],
  ['bomb', null, null, null, null],
  [null, null, null, 'bomb', null],
  [null, 'bomb', null, null, null]
]

// bounds-checking helper function
// returns an "empty" value if the coordinate doesn't exist.
function getCell(grid, row, col) {
  let empty = null;
  if (row < 0 || col < 0) {
    return empty;
  } else if (row >= grid.length) {
    return empty;
  } else if (col >= grid[row].length) {
    return empty;
  } else {
    return grid[row][col]
  }
}

// this function accepts a 2D array representing
// a minesweeper minefield. It returns a new 2D
// array where each cell has a number representing
// how many bombs that cell touches, 
// let MINEFIELD = [
//   [null, null, null, null, 'bomb']
//   [null, null, null, null, 'bomb']
//   ['bomb', null, null, null, null]
//   [null, null, null, 'bomb', null]
//   [null, 'bomb', null, null, null]
// ]
// [
//  [0, 0, 0, 2, *]
//  [1, 1, 0, 2, *]
//  [*, 1, 1, 2, 2]
//  [2, 2, 2, *, 1]
//  [1, *, 2, 1, 1]
// ]
function markMines(field) {
  for (let row = 0; row < field.length; row++) {
    for (let col = 0; col < field[row].length; col++) {
      field[row][col] = countMines(field, row, col)
    }
  }
  
  return field
}

function countMines(field, row, col) {
  if (field[row][col] === 'bomb') {
    return 'bomb'
  }
  let result = 0;
  
  if (getCell(field, row - 1, col) === 'bomb') { // north
    result++
  }
  if (getCell(field, row + 1, col) === 'bomb') { // south
    result++
  }
  if (getCell(field, row, col + 1) === 'bomb') { // east
    result++
  }
  if (getCell(field, row, col - 1) === 'bomb') { // west
    result++
  }
  
  if (getCell(field, row - 1, col - 1) === 'bomb') { // nw
    result++
  }
  if (getCell(field, row - 1, col + 1) === 'bomb') { // ne
    result++
  }
  if (getCell(field, row + 1, col - 1) === 'bomb') { // sw
    result++
  }
  if (getCell(field, row + 1, col + 1) === 'bomb') { // se
    result++
  }
  
  return result;
}

console.log(MINEFIELD)
let result = markMines(MINEFIELD)
console.log(result)
assert(result[0][0], 0)
assert(result[1][0], 1)
assert(result[1][1], 1)
assert(result[3][0], 2)
assert(result[4][4], 1)

function assert(actual, expected) {
  if (expected !== actual) {
    console.log("expected:", expected, "actual:", actual)
  }
}
