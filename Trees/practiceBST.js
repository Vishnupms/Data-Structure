class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root ===null
    }
    insert(val){
        const newNode = new Node(val)
        if(this.isEmpty()){
            this.root = newNode
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.val<root.val){
            if(root.left === null){
                root.left = newNode
            }
            else{
                this.insertNode(root.left,newNode)
            }
        }
        else{
            if(root.right ===null){
                root.right = newNode
            }
            else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    search(root,val){
        if(!root) return false
        else{
            if(root.val===val){
               return true
            }
            else{
                if(val<this.root.val){
                    return this.search(root.left,val)
                }
                else{
                    return this.search(root.right,val)
                }
            }
        }
    }
    minVal(root){
        if(!root.left){
            return root.val
        }
        else{
            return this.minVal(root.left)
        }
    }
    maxVal(root){
        if(!root.right){
            return root.val
        }
        else{
            return this.maxVal(root.right)
        }
    }
    delete(val){
        this.root = this.deleteNode(this.root,val)
    }
    deleteNode(root,val){
        if(root === null) return root
        if(root.val<val){
            root.left = this.deleteNode(root.left,val)
        }
        else if(root.val>val){
            root.right = this.deleteNode(root.right,val)
        }
        //val is equal
        else{
           if(!root.left && !root.right){
            return null
           }
           else if(!root.left){
            return root.right
           }
           else if(!root.right){
            return root.left
           }
           root.val = this.minVal(root.right)
           root.right = this.deleteNode(root.right,root.val)
        }
    }
    print(){
        const result = []
        function traverse(node){
            if(node !==null){
                traverse(node.left)
                result.push(node.val)
                traverse(node.right)
            }
        }
        traverse(this.root)
        console.log(result)

    }
    isValidBST(node,min,max){
        if(node === null){
            return true
        }
        if(node.val<=min||node.val>=max){
            return false
        }
        return(
            this.isValidBST(node.left,min,node.val)&&
            this.isValidBST(node.right,node.val,max)
        )
    }
    //check its BST or not
    isBST(root){
        return this.isValidBST(root,0,200)
    }
    preOrder(root){
        if(root){
            console.log(root.val)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    breadthFirst(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.val)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
}
const tree = new BST()
tree.insert(25)
tree.insert(5)
tree.insert(10)
tree.insert(15)
tree.insert(20)
tree.insert(30)
tree.insert(35)
tree.insert(40)

tree.print()

console.log("breadthOrder")
tree.breadthFirst()


console.log(tree.isBST(tree.root))