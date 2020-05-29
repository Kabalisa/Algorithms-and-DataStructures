const isPalindrome = (str) => {
  let newStr;

  const palindrome = (input) => {
    if (input.length <= 1) {
      return input[0];
    }

    newStr =
      input[input.length - 1] + palindrome(input.slice(0, input.length - 1));
    return newStr;
  };

  palindrome(str);

    return str === newStr;
};

console.log(isPalindrome("lolo"));
