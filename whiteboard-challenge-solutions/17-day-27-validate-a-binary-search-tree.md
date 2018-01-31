validate a binary search tree - make sure every node to the left or right of root is less than the root or greater than the root and every node that is a child of another node is less or greater than that node depending on if it is the nodes left or right value

```js
class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  validate() {
    return this._validate(this.root);
  }
  
  _validate(node) {
    if (!node) {
      return true;
    } else if (node.left && left.left.value > this.value) {
      return false;
    } else if (node.right && left.right.value < this.value) {
      return false;
    }
    return this._validate(this.left) && this._validate(this.right);
  }
}
```

```javascript
// recursion
// recurse through, call validate(node, min, max)

// set max to value of root node
// move left and compare value of root.left to value of root
// once we compare we move left or right
// and reset max each time
// when we move left we update the max value
// when we move right we update the min value

class BinarySearchTree{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let one = new BinarySearchTree(1);
let two = new BinarySearchTree(2);
let three = new BinarySearchTree(3);
let four = new BinarySearchTree(4);
let five = new BinarySearchTree(5);
let six = new BinarySearchTree(6);
let seven = new BinarySearchTree(7);

four.left = two;
four.right = six;

two.left = one;
two.right = three;

six.left = five;
six.right = seven;

const validate = (node, min = null, max = null) => {
  if(max !== null && node.value > max) {
    return false;
  }
  if(min !== null && node.value < min) {
    return false;
  }

  if(node.left && !validate(node.left, min, node.value)) {
    // if node.left exists and calling validate with node.left, min, and the value of the current node 
    // returns false then something went wrong and we return false
    return false;
  }
  if(node.right && !validate(node.right, node.value, max)) {
    return false;
  }

  return true;
}
validate(three);
```
