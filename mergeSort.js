function mergeArrays(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr2.length;

    let l=0;
    let r=0;
    let arr = [];
    while(l<len1 || r<len2) {

        if(l<len1 && r<len2) {
            if(arr1[l] < arr2[r]) {
                arr.push(arr1[l]);
                l++;
            }else{
                arr.push(arr2[r]);
                r++;
            }
        }
        else if(l<len1) {
            arr.push(arr1[l]);
            l++;
        }else{
            arr.push(arr2[r]);
            r++;
        }
    }
    return arr
}
function mergeSort(array) {
    let newArray = [];

    let len = array.length;
    if(len === 1) {
        return array;
    }
    let mid = (len+1)/2;

    let array1 = mergeSort(array.slice(0,mid));
    let array2 = mergeSort(array.slice(mid,len));

    return newArray = mergeArrays(array1, array2); 
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));