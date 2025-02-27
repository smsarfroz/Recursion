merge(arr1 , arr2) {
    arr
    int l=0;
    int r=0;

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

array
mergeSort(l,r) {
    if(l==r){
        return array[l];
    }
    mid = (l+r)/2;

    array1= mergeSort(l,mid);
    array2= mergeSort(mid+1,r);

    return  newArray = merge(array1,array2);
}