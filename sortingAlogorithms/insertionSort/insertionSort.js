function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    console.log("j", j, "j+1", j + 1);
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([3, 2, 1]);