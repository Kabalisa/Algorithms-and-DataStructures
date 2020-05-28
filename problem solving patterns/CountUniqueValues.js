function uniqueValues (arr) {
    let first = 0;
    let second = 1;
    if(arr.length === 0) {
        return 0;
    }

    while(second< arr.length) {
        if(arr[first] === arr[second]) {
            second++;
        }
        if(arr[first] !== arr[second]) {
            first++;
            arr[first] = arr[second];
            second++;
        }
    }
    return first + 1;
}
// update a pointer only at a certain condition.
console.log(uniqueValues([1,2,3,1]));
//           j
// 1,4,5,6,8,9,9
//             j