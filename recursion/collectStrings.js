const collectStrings = (obj) => {
  let arr = [];
  for (let val in obj) {
    if (typeof obj[val] === "object") {
      arr = [...arr, ...collectStrings(obj[val])];
    }

    if (typeof obj[val] === "string") {
      arr.push(obj[val]);
    }
  }

  return arr;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};


