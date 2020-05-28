const areThereDuplicates = (...args) => {
    // make args an array of strings (for multiple pointer)
    // const stringArgs = args.map(arg => arg.toString());
    // console.log(args, stringArgs);

    //create a frequency counter object for that array of strings
    let frequencyCounterObj = {};
    for(let arg of args) {
        frequencyCounterObj[arg] = (frequencyCounterObj[arg] || 0) + 1;
    }

    // loop through the frequency counter object and see if any key value exceeds one
    for(let val in frequencyCounterObj) {
        if(frequencyCounterObj[val] > 1) {
            return true;
        }
    }

    return false;
}

console.log(areThereDuplicates(1,2,4,4));