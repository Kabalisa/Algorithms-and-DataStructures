class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);

    const bubbleUp = () => {
      if (this.values.length - 1 > 0) {
        let index = this.values.length - 1;
        let parentNodeIndex = Math.floor((index - 1) / 2);
        let parentPriority = this.values[parentNodeIndex].priority;
        while (parentPriority > priority) {
          this.swap(this.values, index, parentNodeIndex);
          if (parentNodeIndex > 0) {
            index = parentNodeIndex;
            parentNodeIndex = Math.floor((index - 1) / 2);
            parentPriority = this.values[parentNodeIndex].priority;
          } else {
            break;
          }
        }
      }
    };

    bubbleUp();
  }

  //deque not working on priority queue for now.

  dequeue() {
    let minValue = null;
    if (this.values.length > 0) {
      this.swap(this.values, 0, this.values.length - 1);
      minValue = this.values.pop();
    }

    const sinkDown = () => {
      let parentNodeIndex = 0;
      let leftChildIndex = 2 * parentNodeIndex + 1;
      let rightChildInndex = 2 * parentNodeIndex + 2;
      if (
        leftChildIndex <= this.values.length ||
        rightChildInndex <= this.values.length
      ) {
        while (
          this.values[leftChildIndex].priority <
            this.values[parentNodeIndex].priority ||
          this.values[rightChildInndex].priority <
            this.values[parentNodeIndex].priority
        ) {
          console.log(rightChildInndex);
          if (
            this.values[leftChildIndex].priority <
            this.values[rightChildInndex].priority
          ) {
            this.swap(this.values, leftChildIndex, parentNodeIndex);
            parentNodeIndex = leftChildIndex;
            leftChildIndex = 2 * parentNodeIndex + 1;
            rightChildInndex = 2 * parentNodeIndex + 2;
          } else if (
            this.values[leftChildIndex].priority >
            this.values[rightChildInndex].priority
          ) {
            this.swap(this.values, rightChildInndex, parentNodeIndex);
            parentNodeIndex = rightChildInndex;
            leftChildIndex = 2 * parentNodeIndex + 1;
            rightChildInndex = 2 * parentNodeIndex + 2;
          } else {
            this.swap(this.values, leftChildIndex, parentNodeIndex);
            parentNodeIndex = leftChildIndex;
            leftChildIndex = 2 * parentNodeIndex + 1;
            rightChildInndex = 2 * parentNodeIndex + 2;
          }
        }
      }
    };

    sinkDown();
    return minValue;
  }
}

let pQueue = new PriorityQueue();

pQueue.enqueue("fever", 4);
pQueue.enqueue("flu", 3);
pQueue.enqueue("consusion", 2);
pQueue.enqueue("brainsout", 1);
pQueue.enqueue("karen", 5);

console.log(pQueue.values);
pQueue.dequeue();
console.log(pQueue.values);
