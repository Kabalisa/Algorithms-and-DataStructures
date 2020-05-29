const odd = (val) => val % 2 !== 0;

const someRecursive = (arr, isOdd) => {
  if (arr.length === 0) {
    return false;
  }

  if (isOdd(arr[0])) {
    return true;
  }

  return someRecursive(arr.slice(1), isOdd);
};

console.log(someRecursive([2, 1], odd));
