class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
  }

  insert(val) {
    this.values.push(val);

    const bubbleUp = () => {
      if (this.values.length - 1 > 0) {
        let index = this.values.length - 1;
        let parentNodeIndex = Math.floor((index - 1) / 2);
        while (this.values[parentNodeIndex] < val) {
          this.swap(this.values, index, parentNodeIndex);
          index = parentNodeIndex;
          parentNodeIndex = Math.floor((index - 1) / 2);
        }
      }
    };

    bubbleUp();
  }

  extractMax() {
    let maxValue = null;
    if (this.values.length > 0) {
      this.swap(this.values, 0, this.values.length - 1);
      maxValue = this.values.pop();
    }

    const sinkDown = () => {
      let parentNodeIndex = 0;
      let leftChildIndex = 2 * parentNodeIndex + 1;
      let rightChildInndex = 2 * parentNodeIndex + 2;
      while (
        this.values[leftChildIndex] > this.values[parentNodeIndex] ||
        this.values[rightChildInndex] > this.values[parentNodeIndex]
      ) {
        if (this.values[leftChildIndex] > this.values[rightChildInndex]) {
          this.swap(this.values, leftChildIndex, parentNodeIndex);
          parentNodeIndex = leftChildIndex;
          leftChildIndex = 2 * parentNodeIndex + 1;
          rightChildInndex = 2 * parentNodeIndex + 2;
        } else if (
          this.values[leftChildIndex] < this.values[rightChildInndex]
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
    };

    sinkDown();
    return maxValue;
  }
}

let heap = new MaxBinaryHeap();

heap.insert(99);
heap.insert(19);
heap.insert(36);
heap.insert(25);
heap.insert(2);
heap.insert(41);
heap.insert(100);
heap.insert(0);

console.log(heap.values);
// heap.extractMax();
// console.log(heap.values);
