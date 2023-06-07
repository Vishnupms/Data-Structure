class Node{
    constructor(val){
        this.val = val
        this.next  = null
    }
}

class Queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }
    enqueue(val){
        var node = new Node(val)
        if(!this.front){
            this.front = node
            this.rear = node
        }
        else{
            this.rear.next = node
            this.rear = node
        }
        this.size++
    }
    dequeue(){
        if(!this.front)return null
        var removeNode = this.front
        this.front = this.front.next
        if(!this.front){
            this.rear = null
        }
        removeNode.next = null
        this.size--
    }
    print(){
        if(!this.front) console.log("stack is empty")
        
        
    }
}