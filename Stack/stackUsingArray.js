class Stack{
    constructor(){
        this.items = []
    }

    push(val){
        return this.items.push(val)
    }
    pop(){
        return this.items.pop()
    }
    print(){
        console.log(this.items.toString())
    }
    deleteMiddle(stack){
        if(this.items.length===0){
            return "stack is empty"
        }
        let mid = this.items.length % 2 ===0? this.items.length/2 -1 : Math.floor(this.items.length/2)
        this.deleteAtIndex(mid)
    }
    deleteAtIndex(index){
        this.items.splice(index,1)
        console.log(index)
    }
}

const stack = new Stack()
stack.push(12)
stack.push(46)
stack.push(98)
stack.push(20)
stack.push(50)
stack.deleteMiddle()
stack.print()