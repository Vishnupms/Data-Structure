function mergeSort(arr){
    if(arr.length<= 1){
        return arr
    }
    const middle = Math.floor(arr.length/2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
    return merge(mergeSort(left),mergeSort(right))
}
function merge(leftArr, rightArr) {
    const sortedArr = [];
  
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift());
      } else {
        sortedArr.push(rightArr.shift());
      }
    }
  
    return [...sortedArr, ...leftArr, ...rightArr]; // Return the merged array
  }

const arr = [8,20,-2,4,-6]

console.log(mergeSort(arr))