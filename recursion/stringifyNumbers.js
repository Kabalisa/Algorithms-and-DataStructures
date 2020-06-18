const stringifyNumbers = (obj) => {
  let newObj = {};
  for (let el in obj) {
    if (toString.call(obj[el]) === "[object Object]") {
      newObj[el] = { ...stringifyNumbers(obj[el]) };
    } else if (toString.call(obj[el]) === "[object Array]") {
      newObj[el] = obj[el].map((item) => item.toString());
    } else if (typeof obj[el] === "number") {
      newObj[el] = obj[el].toString();
    } else {
      newObj[el] = obj[el];
    }
  }

  return newObj;
};

let obj = {
  num: 1,
  test: [8, 3, 4],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

//toString.call(obj[el]) === "[object Object]"
//Object.keys(obj).length
