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
        var newNode = new Node(val)
        if(this.isEmpty()){
         this.root = newNode
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.val<root.val){
            if(root.left ===null){
                root.left = newNode
            }
            else{
                this.insertNode(root.left,newNode)
            }
        }
        else{
            if(root.right === null){
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
                return root.val
            }
            else{
                if(val<root.val){
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
            return this.minVal(root.right)
        } 
    }
    delete(val){
        this.root = this.deleteNode(this.root,val)
    }
    deleteNode(root,val){
        if(root===null) return root
        if(val<root.val){
            root.left = this.deleteNode(root.left,val)
        }
        else if(val>root.val){
            root.right = this.deleteNode(root.right,val)
        }
        else{
            //val is equal
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
        return root
    }
    print(){
        const result =[]
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
    breadthFirst(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            var curr = queue.shift()
            console.log(curr.val)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    isValidBST(node,min,max){
        if(node === null) return true
        if(node.val<=min || node.val>=max){
            return false
        }
        return(
            this.isValidBST(ndoe.left,min,node.val)&&
            this.isValidBST(node.right,node.val,max)
        )
    }
    isBST(root){
        return this.isValidBST(root,0,100)
    }
}
const tree = new BST()
tree.insert(10)
tree.insert(20)
tree.insert(30)
tree.insert(40)
tree.delete(40)
console.log(tree.search(tree.root,1))
tree.print()
console.log(tree.isBST(tree.root))


