const capitalizeFirst = (arr) => {
  //declare newArr
  let newArr = [];

  const capitalize = (input) => {
    //declare a temp empty string
    let tempString = "";
    //base case when arr.length <= 0 return;
    if (input.length <= 0) {
      return;
    }
    //loop through the arr[0]
    for (let val of input[0]) {
      //if it's index 0 captalise and add to temp string
      if (input[0].indexOf(val) === 0) {
        tempString += val.toUpperCase();
      }
      // on other indexes just add to temp string
      else {
        tempString += val;
      }
    }
    newArr = [...newArr, tempString];
    // call helper function with arr.slice(1)
    capitalize(input.slice(1));
  };

  //call helper function with arr
  capitalize(arr);

  return newArr;
};

console.log(capitalizeFirst(["car", "taco", "banana"]));
