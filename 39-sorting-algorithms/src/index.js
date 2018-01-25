//const mergeSort = require('./mergesort');
const quickSort = require('./quicksort');

let numericArray = [5,2,1,0,8,28];

//numericArray = mergeSort(numericArray);
quickSort(numericArray);

console.log(numericArray);