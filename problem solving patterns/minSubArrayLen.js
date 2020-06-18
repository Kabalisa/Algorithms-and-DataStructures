const minSubArrayLen = (nums, sum) => {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
          console.log('====>>1', total, end);
        total += nums[end];
              end++;
              console.log('====>>2', total, end);
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        console.log('====>>3', total, start);
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
              console.log('====>>4', total, start, minLen);
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
    return minLen === Infinity ? 0 : minLen;
}


//if the sum is not yet achievend continue incrementing end
//if the sum is achieved, measure length, substract the first element, record sum and increment start.
// if new length's sum is still >= to the required sum, repeat 2
// if it is not >=(<) start again one
// if the sum is less than the required and end have reached nums.length =, break the loop and use the minlen you stored
// if in there is a case where start reaches nums.length, the loop stops and uses the minLen recorded. [3,2,1], 1

//[2,3,1,2,4,3] 7