function fibs(num) {

    let arr = [];

    arr.push(0);
    arr.push(1);

    for(let i =2; i<num; ++i) {
        arr.push(arr[i-1]+arr[i-2]);
    }

    return arr;
}

console.log(fibs(20));
//I want to return an array
//fibsRec(num) return fibonacci array of length num
//fibsRec(num) = fibsRec(num-1).push(X);
//if fibsRec(num-1) had array
//X= array[num-2] + array[num -3]
function fibsRec(num) {
    let arr = [];

    console.log("This was printed recursively");
    if(num === 1) {
        arr.push(0);
        return arr; 
    }

    if(num === 2) {
        arr.push(0);
        arr.push(1);
        return arr;
    }

    let prevarr = fibsRec(num-1);
    let idx = num - 1;

    arr = prevarr; 
    arr.push(prevarr[idx-1] + prevarr[idx-2]);

    return arr;
}

console.log(fibsRec(8));