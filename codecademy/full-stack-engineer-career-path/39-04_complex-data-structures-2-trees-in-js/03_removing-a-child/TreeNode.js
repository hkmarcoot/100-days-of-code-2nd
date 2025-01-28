class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(child) {
    if (child instanceof TreeNode) {
      this.children.push(child);
    } else {
      this.children.push(new TreeNode(child));
    }
  }

  removeChild(childToRemove) {
    const length = this.children.length;
    this.children = this.children.filter((child) => {
      if (childToRemove instanceof TreeNode) {
        if (childToRemove != child) {
          return true;
        } else {
          return false;
        }
      } else {
        if (childToRemove != child.data) {
          return true;
        } else {
          return false;
        }
      }
    });
    // this.children = this.children.filter(child => {
    //   return childToRemove instanceof TreeNode
    // ? child !== childToRemove
    // : child.data !== childToRemove;
    // });
    if (length === this.children.length) {
      this.children.forEach((child) => child.removeChild(childToRemove));
    }
  }
}

module.exports = TreeNode;
