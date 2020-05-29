const flatten = (oldArr) => {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
};

console.log(flatten([5, [[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
