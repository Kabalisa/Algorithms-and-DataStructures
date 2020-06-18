const findLongestSubstring = (str) => {
    // declare start, end, maxLen = - infinity, tempArr
    let start = 0;
    let end = 0;
    let maxLen = - Infinity;
    let tempArr = [];
    // do the below operations while start is less than str.length
    while(start < str.length){
     //if element of str is not an element of tempArr && end is not yet === str.length
     if(!(tempArr.includes(str[end])) && end < str.length) {
        //push the element at index end into tempArr, the increment end and assgn maxLen the value from Math.max(maxLen, tempArr.length)
        tempArr.push(str[end]);
        end++;
        maxLen = Math.max(maxLen, tempArr.length);
        console.log(tempArr, end);
     }
    //else if element of str is an element of tempArr, then shift temp 
    else if(tempArr.includes(str[end])) {
        tempArr.shift();
        start++
    }
    else {
        break;
    }
}
 return maxLen === - Infinity ? 0 : maxLen
}

// let longest = 0;
// let seen = {};
// let start = 0;

// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   if (seen[char]) {
//     start = Math.max(start, seen[char]);
//   }
//   // index - beginning of substring + 1 (to include current in count)
//   longest = Math.max(longest, i - start + 1);
//   console.log(longest)
//   // store the index of the next char so as to not double count
//   seen[char] = i + 1;
// }
// return longest;