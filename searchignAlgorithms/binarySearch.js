const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = 0;
  let newArr = arr;

  while (start <= end) {
    middle = Math.floor(end / 2);
    if (newArr[middle] === val) {
      return arr.indexOf(val);
    }
    if (newArr[middle] > val) {
      end = middle - 1;
      newArr = newArr.slice(0, middle);
    }
    if (newArr[middle] < val) {
      newArr = newArr.slice(middle + 1);
      end = end - (middle + 1);
    }
  }
  return -1;
};

