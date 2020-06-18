const sameFrequency = (num1, num2) => {
    //convert the numbers in strings.
    const stringNum1 = num1.toString();
    const stringNum2 = num2.toString();

    //create an edge case for when the nums are not eqaul and when they are negative.
    if((num1 < 0) || (num2 < 0)) {
        return false;
    }

    if(stringNum1.length !== stringNum2.length) {
        return false;
    }

    // declare a lookup obj for stringNum1
    let lookup = {};
    //initialize the lookup with frequency counter of stringNum1
    for(let i = 0; i < stringNum1.length; i++) {
        let num = stringNum1[i];
        lookup[num] ? lookup[num] +=1 : lookup[num] = 1;
    }


    //loop through stringNum2 checking if the frequency of digits is the same.
    for(let j= 0; j < stringNum2.length; j++) {
        let num = stringNum2[j];

        if(!(lookup[num])) {
            return false;
        }
        else {
            lookup[num] -=  1;
        }
    }
    return true;
}
