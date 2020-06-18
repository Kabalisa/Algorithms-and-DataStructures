const capitalizeWords = (arr) => {
  // declare newArr = [];
  let newArr = [];

  //base case when arr.length <= 1 return arr[0].toUpperCase
  if (arr.length <= 1) {
    return [arr[0].toUpperCase()];
  }

  //assign newArr with the capitalized first element
  newArr.push(arr[0].toUpperCase());

  //recursive case concatinate newArr with the result of calling capitalizeWords with smaller arr
  newArr = [...newArr, ...capitalizeWords(arr.slice(1))];

  return newArr;
};

let words = ["i", "am", "learning", "recursion"];

