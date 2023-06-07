function isValisParanthesis(s){
    let stack =[]
    let pairs = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    for(let i=0;i<s.length;i++){
        let char= s[i]

        if(char === '(' || char === '{' || char==='['){
            stack.push(char)
        }
        else{
            let lastOpening = stack.pop()
           console.log(pairs[lastOpening],"no")
            if(char !== pairs[lastOpening]){
                return false
            }
        }
    }
    return true
}
console.log(isValisParanthesis('()'))