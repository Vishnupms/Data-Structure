function binarySerch(arr,target){
    let leftIndex = 0
    let righIndex = arr.length-1
    if(leftIndex<= righIndex){
        let middleIndex = Math.floor((leftIndex + righIndex)/2)

        if(target == arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex]){
          righIndex = middleIndex-1
        }
        else{
            leftIndex = middleIndex+1
        }
  return -1
    }
}
console.log(binarySerch([1,2,3,4,5,6],6))