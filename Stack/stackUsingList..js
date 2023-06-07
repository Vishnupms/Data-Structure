class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
    
}
class Stack{
    constructor(){
        this.top = null
        this.size =0
    }
    push(val){
        var node = new Node(val)
        if(!this.top){
            this.top = node
        }
        else{
            node.next = this.top
            this.top = node
        }
        this.size++
    }
    pop(){
        if(!this.top) return undefined
        var removeNode = this.top
        this.top = this.top.next
        removeNode.next = null
        this.size--
        return removeNode.val
    }
    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size ===0
    }
    peek(){
        if(!this.top)return null
        return this.top.val
    }
    print(){
        if(!this.top) console.log("stack is empty")
        var curr = this.top
        while(curr){
            console.log(curr.val)
            curr = curr.next
        }
    }
}
const stack = new Stack()
stack.push(5)
stack.push(10)
stack.push(15)
stack.pop()
stack.print()

