// function isAnagram(s,t){
//     if(s.length !== t.length){
//        return false
//     }

//     const charCount = {}
//     for(let i=0;i<s.length;i++){
//         const char = s[i]
//         charCount[char] = charCount[char] ? charCount[char]+1 :1
//     }

// // decrement count for each char in string
// // if a char count is negetive or char is missing its not anagram
//  for(let i=0;i<t.length;i++){
//     const char = t[i]

//     if(!charCount[char]){
//         return false;
//     }
//     charCount[char]--
//     if(charCount[char]<0){
//       return false
//     }
//  }
//  return true
// }
// function isAnagram(str1,str2){
//     str1= str1.toLowerCase()
//     str2 = str2.toLowerCase()

//     let charArr1 = str1.split('').sort().join('')
//     let charArr2 = str2.split('').sort().join('')

//     if(charArr1 === charArr2){
//         return "string is anangram"
//     }
//     else{
//         return "not an anagram"
//     }
// }
function isAnagram(str1,str2){
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    if(str1.length !== str2.length){
        return false
    }
    charCount1 ={}
    charCount2 ={}

    for(let char of str1){
        charCount1[char] = (charCount1[char] ||0)+1
        
    }
    for(let char of str2){
        charCount2[char] = (charCount2[char] ||0)+1
    }

    //compare char count
    for(let char in charCount1){
        if(charCount1[char]!==charCount2[char]){
            return false
        }
    }
    return true
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("ABCDEFGH", "abcdefH")); // false