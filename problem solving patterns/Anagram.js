function ValidAnagram(string1, string2) {
    //check if both strings have the same length
    if(string1.length !== string2.length) {
        return false;
    }
    //check if both strings are empty and return true
    if(!string1 && !string2) {
        return true;
    }
    //declare frequency counter objects for both strings
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    //loop through both strings and initialise both frequency counter objects
    for(let val of string1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for(let val of string2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    //loop through frequency counter object1 and check whether each key does not exists in the frequency object2
      // if it does not exist, return false
      //then check whether the value of each key in frequency counter object1 is not the same as it's corresponding one in object2
      // if it does not exist, return false
    // return true at the end if none of these conditions above pass. meaning the words are anagrams.

    for(let val in frequencyCounter1) {
        if(!(val in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter1[val] !== frequencyCounter2[val]) {
            return false;
        }
    }
    return true;
}
