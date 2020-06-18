const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
  return array;
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let pivotIdex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIdex++;
      swap(arr, pivotIdex, i);
    }
  }

  swap(arr, start, pivotIdex);
  return pivotIdex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3\
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

