// function hasUniqeChar(str){
//     var charCount = {}
//     for(let i=0;i<str.length;i++){
//         const char = str[i]
//         if(charCount[char]){
//             return false
//         }
//         charCount[char] =1
//     }
//     return true
// }
// var string1 = "tabso"; // Not all characters are unique
// console.log(hasUniqeChar(string1));

function areArraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
  
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  var arr1 = [1, 2, 3, 4, 5];
  var arr2 = [1, 2, 3, 4, 5];
  console.log(areArraysEqual(arr1, arr2)); // Output: true