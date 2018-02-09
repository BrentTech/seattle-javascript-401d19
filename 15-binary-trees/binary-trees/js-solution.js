'use strict';

class BinaryTree{
  constructor(value,weight){
    this.value = value;
    this.left = null;
    this.right = null;
    this.weight = weight;
  }
}

let one = new BinaryTree(1,1);
let two = new BinaryTree(2,1);
let three = new BinaryTree(3,1);
let four = new BinaryTree(4,1);
let five = new BinaryTree(5,1);


one.left = two;
one.right = three;

three.left = four;
three.right = five;

let findRootToLeafPathWithSum = (root,targetWeight) => {
  return findRootToLeafPathWithSum_helper(root,0,targetWeight);
};

let findRootToLeafPathWithSum_helper = (root,weightSoFar,targetWeight) => {
  //vinicio - it's a leaf
  if(root.left === null && root.right === null){
    console.log(`Finding a leaf with weight ${root.weight + weightSoFar}`);

    if(root.weight + weightSoFar === targetWeight){
      return true;
    }
    return false;
  } else {
    let leftSideValue = root.left ? 
      findRootToLeafPathWithSum_helper(
        root.left,
        root.weight + weightSoFar,
        targetWeight) : false;
    
    if(leftSideValue === true)
      return true;

    return root.right ? findRootToLeafPathWithSum_helper(
      root.right,
      root.weight + weightSoFar,
      targetWeight) : false;
  }
};

console.log(findRootToLeafPathWithSum(one,1));
