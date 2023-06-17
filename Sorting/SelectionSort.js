function selectionSort(arr){
    let len = arr.length
    for(let i=0;i<len-1;i++){
        let minIndex = i

        for(let j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex!==i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
    return arr
}
let arr = [4,7,2,5,9,1,3]
selectionSort(arr)
console.log(arr)