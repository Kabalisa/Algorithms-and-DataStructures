const reverse = (str) => {
  if (str.length <= 1) {
    return str[0];
  }

  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
};

