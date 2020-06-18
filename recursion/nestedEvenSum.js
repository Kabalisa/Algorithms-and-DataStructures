const nestedEvenSum = (obj) => {
  //declare sum === 0
  let sum = 0;
  //loop through obj
  for (let val in obj) {
    //if val is an object, call nestedEvenSum with val
    if (typeof obj[val] === "object") {
      sum += nestedEvenSum(obj[val]);
    }
    // other wise if val%2 === 0, sum += val;
    if (typeof obj[val] === "number" && obj[val] % 2 === 0) {
      sum += obj[val];
    }
  }

  return sum;
};

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

