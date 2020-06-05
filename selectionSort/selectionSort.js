const swap = (array, idx1, idx2) => {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  return array;
};

let smallest;

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    smallest = i;
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[smallest] > arr[j + 1]) {
        smallest = j + 1;
      }
    }
    if (i !== smallest) {
      swap(arr, i, smallest);
    }
  }
  return arr;
};

console.log(selectionSort([4, 1, 5, 35, 0, 44, 6]));
