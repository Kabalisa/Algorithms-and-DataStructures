const linearSearch = (arr, val) => {
  for (let index in arr) {
    if (arr[index] === val) {
      return  Number(index);
    }
  }
  return -1;
};
console.log(linearSearch([10, 15, 20, 25, 30, 35], 15));
