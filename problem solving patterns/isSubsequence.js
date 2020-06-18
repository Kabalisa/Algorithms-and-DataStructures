const isSubsequence = (str1, str2) => {
    // declare i and j both starting at 0
    let i = 0;
    let j = 0;
    //declare a counter
    let counter = -1;
    //condition is while counter is !== 0
    while(counter !== 0) {
    //if str1[i] === str2[j] increment both i and j
    if(str1[i] === str2[j]) {
        i++;
        j++;
    } else{
    // else increment only j
    j++;
}
    // if i === str1.length - 1 return true
    if(i === str1.length) {
        return true;
    }
    // j === str2.length - 1 then counter = 0
    if(j === str2.length) {
        counter = 0;
    }
 }
 return false;
}

//syntatically simple but the same (look back refactor)
// function isSubsequence(str1, str2) {
//     var i = 0;
//     var j = 0;
//     if (!str1) return true;
//     while (j < str2.length) {
//       if (str2[j] === str1[i]) i++;
//       if (i === str1.length) return true;
//       j++;
//     }
//     return false;
//   }