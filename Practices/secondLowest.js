let l1 = 100
let l2 = 100
let l3 = 100
function secLowest(arr){
   for(let i=0;i<arr.length;i++){
    if(arr[i]<l1){
        l2 = l1
        l1= arr[i]
    }
    else if(arr[i]<l2){
        l2= arr[i]
    }
   }
   return l2
}
function thirdLowest(arr){
    for(let i = 0;i<arr.length;i++){
        if(arr[i]<l1){
            l3=l2
            l2=l1
            l1=arr[i]
        }
        else if(arr[i]<l2 && arr[i]>l1){
            l3 = l2
            l2=arr[i]
        }
        else if(arr[i]<l3 && arr[i]>l2){
            l3 = arr[i]
        }
    }
    return l3
}
console.log(secLowest([1,4,7,9,3,8,9]))
console.log(thirdLowest([1,7,9,3,8,9]))
