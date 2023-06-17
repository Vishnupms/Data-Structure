function isValidParanthesis(str){
    let stack =[]
    let pairs = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    for(let i =0;i<str.length;i++){
        let char = str[i]

        if(char ==='('|| char ==='{'||char ==='['){
            stack.push(char)
        }
        else{
            let lastOpening = stack.pop()
            if(char!== pairs[lastOpening]){
                return false
            }
        }
    }
    return true
    
}
console.log(isValidParanthesis("{}"))
console.log(isValidParanthesis("{)"))
