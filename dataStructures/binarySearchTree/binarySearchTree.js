class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let node = this.root;
      let freeNode = false;
      while (!freeNode) {
        if (newNode.value > node.value) {
          if (!node.right) {
            node.right = newNode;
            freeNode = true;
          } else {
            node = node.right;
          }
        } else if (newNode.value < node.value) {
          if (!node.left) {
            node.left = newNode;
            freeNode = true;
          } else {
            node = node.left;
          }
        } else {
          return this;
        }
      }
    }
    return this;
  }

  find(val) {
    if (!this.root) {
      return false;
    } else {
      let node = this.root;
      let nodeNotFound = false;
      while (!nodeNotFound) {
        if (val === node.value) {
          return val;
        } else {
          if (val > node.value) {
            if (!node.right) {
              nodeNotFound = true;
            } else {
              node = node.right;
            }
          } else {
            if (!node.left) {
              nodeNotFound = true;
            } else {
              node = node.left;
            }
          }
        }
      }
      return false;
    }
  }
}

