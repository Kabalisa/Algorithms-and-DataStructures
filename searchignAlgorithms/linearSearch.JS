const linearSearch = (arr, val) => {
  for (let index in arr) {
    if (arr[index] === val) {
      return  Number(index);
    }
  }
  return -1;
};
