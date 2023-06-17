function heapSort(arr){
    buildMaxHeap(arr)
    // extract max element from heap and heapify remaining element
    for(let i=arr.length-1;i>0;i--){
        // swap root with last element
      swap(arr,0,i)
      // hapify the reduces heap
      heapify(arr,i,0)
    }
    return arr
    
}
function buildMaxHeap(arr){
    const n = arr.length
    // Start from the last non-leaf node and heapify all nodes in reverse order
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i )
    }
}

function heapify(arr,n,i){
    let largest = i
    let left = 2*i+1
    let right = 2*i+2
    // if the left child is largest than root
    if(left<n && arr[left]>arr[largest]){
        largest = left
    }
    //if the right child is larger than the  largest so far
    if(right<n && arr[right]>arr[largest]){
        largest = right
    }
     // If the largest is not the root, swap it with the largest child and recursively heapify the affected subtree
     if(largest !==i){
        swap(arr,i,largest);
        heapify(arr,n,largest)
     }
     
}
function swap(arr,i,j){
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

}
const arr = [8, 5, 2, 9, 1, 6, 3];
const sortedArr = heapSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 5, 6, 8, 9]
