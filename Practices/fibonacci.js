function fibonacci(num){
    if(num <=1){
        return num
    }

        return fibonacci(num-1) +fibonacci(num-2)

}
let num = 5
console.log("fibonacci series of 5 number is")
for(let i=0;i<num;i++){
    console.log(fibonacci(i)+"")
}