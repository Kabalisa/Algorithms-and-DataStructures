const naiveStringSearch = (string1, string2) => {
  let count = 0;
  let count2 = 0;
  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (!(string2[j] === string1[i + j])) {
        break;
      } else {
        count2++;
      }
    }
    if (count2 === string2.length) {
      count++;
    }
    count2 = 0;
  }
  return count;
};

console.log(naiveStringSearch("omgutomgksgmsdomg", "omg"));
