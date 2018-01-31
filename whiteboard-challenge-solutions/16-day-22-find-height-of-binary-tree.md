calculate the height of a binary tree -- returns an integer

```javascript
class BinaryTree{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let one = new BinaryTree(1);
let two = new BinaryTree(2);
let three = new BinaryTree(3);
let four = new BinaryTree(4);
let five = new BinaryTree(5);
let six = new BinaryTree(6);
let seven = new BinaryTree(7);
let eight = new BinaryTree(8);
let nine = new BinaryTree(9);

four.left = two;
four.right = six;

two.left = one;
two.right = three;

six.left = five;
six.right = eight;

eight.left = seven;
eight.right = nine;

const nodeHeight = (node) => {
  if(!(node instanceof BinaryTree)) return null;

  let left = node.left ? nodeHeight(node.left) : null;
  let right = node.right ? nodeHeight(node.right) : null;

  return (left == null && right == null) ? 1 :
    Math.max(left, right) + 1;
}

nodeHeight(four); // returns 4 (height of tree)

```

```js
class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  nodeHeight() {
    return this._nodeHeight(this.root);
  }

  _nodeHeight(node) {
    if (!node) {
      return 0;
    }

    let left = this._nodeHeight(node.left);
    let right = this._nodeHeight(node.right);
    let maxHeight = Math.max(left, right);
    return maxHeight + 1;
  }
}
```


```js
class Tree {
  constructor() {
    this.root = null;
  }

  nodeHeight() {
    return this._nodeHeight(this.root);
  }

  _(node) {
    if (!node) return 0;
    return 1 + Math.max(this._(node.left), this._(node.right));
  }
}
```
