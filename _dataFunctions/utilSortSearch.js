
////// Binary Search
let arrSorted =[1,2,3,4,5,6,7,8]
const binarySearch = (arr, num) => {
    let midIndex = Math.floor(arr.length/2); 
    if (num ===arr[midIndex]) return true;
    if (num < arr[midIndex] && arr.length>1) {
        return binarySearch(arr.splice(0,midIndex), num)
    } 
    else if (num > arr[midIndex] && arr.length>1) {
        return binarySearch(arr.splice(midIndex,arr.length), num)
    }
    else return false
}
// console.log("binarySearch: "+binarySearch(arrSorted,1))

////// BubbleSort
let arrUnsorted =[1,5,8,2,3,4,6,7]
const bubbleSort = (arr, num) => {

    for(let i=arr.length;i>0;i--){
        for(let j = 0;j<i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
// console.log(arrUnsorted+"...>> "+bubbleSort(arrUnsorted))

function mergeSort(arr) {
    if (arr.length<2) return arr; // base case
    let midIdx = Math.floor(arr.length/2);
    let left = arr.slice(0,midIdx);
    let right = arr.splice(midIdx,arr.length);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(arrL, arrR) {
    let result = [];
    while (arrL.length && arrR.length) { // after both shifted off 
        let minElement 
        if(arrL[0]<arrR[0]){
            minElement = arrL.shift();
        } else {
            minElement = arrR.shift()
        }
        result.push(minElement)
    }
    if(arrL.length) {
        result = result.concat(arrL)  
    } else {
        result = result.concat(arrR)
    }
    return result; 
}
console.log(mergeSort([34,23,11,2,333]))
console.log(mergeSort([34,23,11,2]))
