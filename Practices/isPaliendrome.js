// function isPaliendrome(s){
//     s = s.toLowerCase()
//     const rev = s.split('').reverse().join('')
//     return s===rev

// }
function isPaliendrome(str){
    str = str.toLowerCase()

    let left = 0
    let right = str.length-1
    while(left<right){
        if(str[left]!==str[right]){
            return false
        }
        left++
        right--
    }
    return true
    
}

console.log(isPaliendrome("malayalam"))
console.log(isPaliendrome("level"))