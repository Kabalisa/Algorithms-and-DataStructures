const averagePair = (arr, avg) => {
    let i = 0; 
    let j = arr.length - 1;

    while(i < j) {
        let average = (arr[i] + arr[j]) / 2;

        if(average === avg) {
            return true;
        }

        if(average < avg) {
            i++;
        }
        else {
            j--;
        }
    }
    return false;
}
