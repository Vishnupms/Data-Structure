// function sumRange(num){
//     if(num===1) {
//         return 1
//     };
//     return num+sumRange(num-1)
// }
// console.log(sumRange(4))

function countDown(num) {
    if (num <= 0) {
      console.log("All Done");
      return;
    }
    console.log(num);
    num--;
    countDown(num);
  }
  countDown(10);