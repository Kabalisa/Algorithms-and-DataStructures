const mergeFunc = (arr1, arr2) => {
  let mergeArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergeArr.push(arr1[i]);
      i++;
    } else {
      mergeArr.push(arr2[j]);
      j++;
    }
  }
  if (i === arr1.length) {
    arr2.slice(j).map((item) => mergeArr.push(item));
  } else {
    arr1.slice(i).map((item) => mergeArr.push(item));
  }

  return mergeArr;
};

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeFunc(left, right);
}

console.log(mergeSort(10, 24, 76, 73));
