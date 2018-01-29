// optimized implementation
const quickSort = items => {
  // vinicio - check for duplicates
  _quicksortHelper(items,0,items.length - 1);
};

const _quicksortHelper = (items,leftIndex,rightIndex) => {
  if(rightIndex > leftIndex){
    let partitionIndex = _partition(items,leftIndex,rightIndex);

    _quicksortHelper(items,leftIndex,partitionIndex -1);
    _quicksortHelper(items,partitionIndex + 1,rightIndex);
  }
};

const _partition = (items,leftIndex,rightIndex) => {
  let pivotIndex = rightIndex; // vinicio - pivot selection can be changed
  let firstHighIndex = leftIndex; 

  // let size = rightIndex - leftIndex;
  // if(size < 10)

  for (let i = leftIndex; i < rightIndex; i++){
    //vinicio - compare A[1] with the pivot
    if(items[i] < items[pivotIndex]){
      // vinicio - we have to swap
      _swap(items,i,firstHighIndex);
      firstHighIndex++;
    }
  }
  _swap(items,pivotIndex,firstHighIndex);
  return firstHighIndex;
};

const _swap = (items,indexA,indexB) => {
  let helper = items[indexA];
  items[indexA] = items[indexB];
  items[indexB] = helper;
};


module.exports = quickSort;