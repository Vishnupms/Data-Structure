class Queue{
    constructor(){
        this.items = []
    }

    enqueue(val){
        return this.items.push(val)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length===0
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    size(){
         return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
} 
const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(80)
queue.dequeue()
queue.print()
console.log(queue.peek())
console.log(queue.size())


