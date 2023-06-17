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
    deleteMiddle(){
        if(!this.top) return 
        if(this.size===0){
            this.top = null
            this.size = 0
            return
        }
        var prev = null
        var slow = this.top
        var fast = this.top
        while(fast && fast.next){
            fast = fast.next.next
            prev = slow
            slow = slow.next
        }
        prev.next = slow.next
        this.size--
    }
    updateAtIndex(index,val){
        if(index<0 || index>= this.size){
            console.log("invalid index")
            return
        }
        var curr = this.top
        for(var i=0;i<index;i++){
            curr = curr.next
        }
        curr.val = val
        console.log("element updated")
    }
}
const stack = new Stack()
stack.push(5)
stack.push(10)
stack.push(15)
stack.push(20)
stack.push(25)
stack.deleteMiddle()
stack.updateAtIndex(2,7)

stack.print()

