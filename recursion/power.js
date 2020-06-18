const power = (base, ex) => {
  // base case of when the ex === 0
  if (ex === 0) {
    return 1;
  }
  // the resursive case of calling power with the same base and the decremented ex
  return base * power(base, ex - 1);
};

