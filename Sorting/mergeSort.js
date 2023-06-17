function mergeSort(arr){
  if(arr.length<=1){
    return arr
  }
  const mid = Math.floor(arr.length/2)
  const left = arr.slice(0,mid)
  const right = arr.slice(mid)
  return mergeSort(mergeSort(left),mergeSort(right))
}
function merge(leftArr,rightArr){
  const sorted = []
  while(leftArr.length && rightArr.length){
    if(leftArr[0]<=rightArr[0]){
      sorted.push(leftArr.shift())
    }
    else{
      sorted.push(rightArr.shift())
    }
  }
  return [...sorted,...leftArr,...rightArr]
}

