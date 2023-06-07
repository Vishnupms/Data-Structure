class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined
        var curr = this.head
        var newTail = curr
        while(curr.next){
            newTail = curr
            curr = curr.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length ==0){
            this.head = null
            this.tail = null
        }
    }
    unshift(val){
        var new_node = new Node(val)
        if(!this.head){
            this.head = new_node
            this.tail = this.head
        }
        new_node.next= this.head
        this.head = new_node
        this.length++
        return this
    }
    shift(){
        if(!this.head) return undefined
        var currHead = this.head
        this.head = currHead.next
        this.length--
        if(this.length==0){
            this.tail = null
        }
    }
    get(index){
        if(index<0 || index>=this.length) return false
        var counter = 0
        var current = this.head
        while(counter !== index){
            current = current.next
            counter++
        }
        return current
    }
    insert(index,val){
        if(index<0||index>this.length) return false
        if(index ==0) return this.unshift(val)
        if(index == this.length) return this.push(val)
        var new_node = new Node(val)
        var prev = this.get(index-1)
        var temp = prev.next
        prev.next = new_node
        new_node.next = temp
        this.length++
        return true

    }
    remove(index){
        if(index<0||index>this.length) return false
        if(index ===0) return this.shift()
        if(index === this.length) return this.pop()
    }
    print(){
        var arr = []
        var curr = this.head
        while(curr){
            arr.push(curr.val)
            curr = curr.next
        }
        console.log(arr)
    }
}
var list = new SinglyLinkedList()
list.push(5)
list.push(8)
list.print()