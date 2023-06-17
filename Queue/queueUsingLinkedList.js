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
        var curr = this.front
        while(curr){
            console.log(curr.val)
            curr = curr.next
        }
        
        
    }
    updateAtIndex(index,val){
        if(index<0|| index>=this.size){
            console.log("invalid index")
        }
        var curr = this.front

        for(let i =0;i<index;i++){
            curr = curr.next
        }
        curr.val = val
        console.log("element updated")
    }
}
const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.updateAtIndex(2,4)
queue.print()
