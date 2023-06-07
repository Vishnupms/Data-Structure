// single missing element
arr = [1,2,3,4,6]
let len = arr.length +1
let total = (len * (len+1)/2)   
let sum = 0
for(let i=0;i<arr.length;i++){
    sum = sum+arr[i]
}
console.log(total-sum)
