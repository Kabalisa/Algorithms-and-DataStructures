const areThereDuplicatesMP = (...args) => {
    
    //sort the args array.(bubble sort)
    let swapCounter = -1;

    while(swapCounter !== 0) {
        swapCounter = 0;
        let r = 0;
        let temp;

        for(let s = 1; s < args.length; s++) {
            if(args[r] > args[s]) {
                temp= args[r];
                args[r] = args[s];
                args[s] = temp;
                swapCounter++;
                r++;
            }
            else {
                r++;
            }
        }
    }

    // console.log(args);

    //declare the first pointer i
    let i = 0;
    //create the for loop to go through the array args which has pointer j starting at 1
     //as long as args[1] is not equal to args[j] increment i and j and move arr[j] into arr[i]
     //if args[1] is equal to args[j] implement j
     //lastly if i is not equal to arr.length -1 it's true and if i is equal to arr.length -1 it's false

     for(let j = 1; j < args.length; j++) {
         if(args[i] !== args[j]) {
             i++;
             args[i] = args[j];
         }
     };

    //  console.log(i, args.length)

     if(i !== (args.length -1)){
         return true;
     }
     else {
         return false;
     }
}

//multiple pointer pattern works only for sorted data!!

console.log(areThereDuplicatesMP(1,2,3,1));