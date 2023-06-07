function binarySerch(arr,target){
    let rightIndex = arr.length-1
    let leftIndex = 0
    
   while(leftIndex<rightIndex){
       let middleIndex = Math.floor((rightIndex+leftIndex)/2)

       if(target === arr[middleIndex]){
        return middleIndex
       }
       if(target < arr[middleIndex]){
        rightIndex = middleIndex-1
       }
       else{
        leftIndex = middleIndex+1
       }

    }
    return -1
}
console.log(binarySerch([1,2,3,4,5],1))