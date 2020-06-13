// piece of data - val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let newTail = temp;

    while (temp.next) {
      newTail = temp;
      temp = temp.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unShift(val) {
    let node = new Node(val);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return this;
  }

  get(val) {
    if (val < 0 || val >= this.length) {
      return null;
    }
    let counter = 0;
    let node = this.head;

    while (counter !== val) {
      node = node.next;
      counter++;
    }

    return node;
  }

  set(index, val) {
    let node = this.get(index);
    if (!node) return false;
    node.val = val;

    return true;
  }

  insert(index, val) {
    let node = new Node(val);
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unShift(val);

    let prevNode = this.get(index - 1);
    let temp = prevNode.next;
    prevNode.next = node;
    node.next = temp;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prevNode = this.get(index - 1);
    let temp = prevNode.next;
    prevNode.next = temp.next;
    this.length--;

    return temp;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("gracias");
console.log(list);
list.reverse();
console.log(list);
