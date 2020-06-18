const arr = (array) => {
  // base case, when the array.length is equal to zero return 1
  if (array.length === 0) {
    return 1;
  }
  //recursive case is multiply array[0] with arr(array.slice(1))
  return array[0] * arr(array.slice(1));
};

