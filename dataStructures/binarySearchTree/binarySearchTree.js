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

  bfs() {
    let queue = [this.root];
    let visited = [];
    let node;
    while (queue.length !== 0) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return visited;
  }

  dfsPreOrder() {
    let visited = [];
    let current = this.root;

    const traverse = (node) => {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return visited;
  }

  dfsPostOrder() {
    let visited = [];
    let current = this.root;

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    };

    traverse(current);
    return visited;
  }

  dfsInOrder() {
    let visited = [];
    let current = this.root;

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return visited;
  }
}

