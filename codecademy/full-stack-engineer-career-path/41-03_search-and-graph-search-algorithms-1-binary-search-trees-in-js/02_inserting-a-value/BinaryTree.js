class BinaryTree {
  constructor(value, depth = 1) {
    this.value = value;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BinaryTree(value, this.depth + 1);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BinaryTree(value, this.depth + 1);
      }
    }
  }
}

module.exports = BinaryTree;
