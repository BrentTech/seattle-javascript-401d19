let weird2DArray = [
  [0, 0]
  [99, 42, 92, 53]
  []
  [2, 6, 87, 43, 82]
  [2]
]

let MINEFIELD = [
  [null, null, null, null, 'bomb'],
  [null, null, null, null, 'bomb'],
  ['bomb', null, null, null, null],
  [null, null, null, 'bomb', null],
  [null, 'bomb', null, null, null]
]

let row = 0
let col = 4
MINEFIELD[row][col]

let x = 1
let y = 4
MINEFIELD[y][x]


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

let irow = 1
let icol = 1

// accessing the array directory may lead to index
// access errors on sides and corners.
MINEFIELD[irow - 1][icol] // north
MINEFIELD[irow + 1][icol] // south
MINEFIELD[irow][icol - 1] // west
MINEFIELD[irow][icol + 1] // east

MINEFIELD[irow - 1][icol - 1] // north west
MINEFIELD[irow - 1][icol + 1] // north east
MINEFIELD[irow + 1][icol - 1] // south west
MINEFIELD[irow + 1][icol + 1] // south east

// using the getCell helper function 
// prevents index-access errors.
getCell(MINEFIELD, irow - 1, icol) // north
getCell(MINEFIELD, irow + 1, icol) // south
getCell(MINEFIELD, irow, icol - 1) // west
getCell(MINEFIELD, irow, icol + 1) // east

getCell(MINEFIELD, irow - 1, icol - 1) // north west
getCell(MINEFIELD, irow - 1, icol + 1) // north east
getCell(MINEFIELD, irow + 1, icol - 1) // south west
getCell(MINEFIELD, irow + 1, icol + 1) // south east

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
function sweepMines(field) {

}
