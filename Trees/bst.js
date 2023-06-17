class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySerchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root ===null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
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
    search(root,value){
        if(!root){
            return false
        }
        else{
            if(root.value === value){
                return true
            }
            else{
                if(value<this.root.value){
                    return this.search(root.left,value)
                }
                else{
                    return this.search(root.right,value)
                }
            }
        }

    }
    minValue(root){
        if(!root.left){
            return root.value  
        }
        else{
            return this.minValue(root.left)
        }
    }
    maxValue(root){
        if(!root.right){
            return root.value
        }
        else{
            return this.maxValue(root.right)
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root===null){
            return root;
        }
        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }
        else if(value>root.value){
            root.right = this.deleteNode(root.right,value)
        }
        //value equal
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
            root.value = this.minValue(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root 
    }
    print() {
        const result = []; // Array to store the values of the nodes
    
        // Helper function for in-order traversal
        function traverse(node) {
          if (node !== null) {
            // Recursively traverse the left subtree
            traverse(node.left);
            // Add the value of the current node to the result
            result.push(node.value);
            // Recursively traverse the right subtree
            traverse(node.right);
          }
        }
    
        // Start the traversal from the root node
        traverse(this.root);
    
        // Print the result array
        console.log(result);
      }
      
      isBSTUtil(node, min, max) {
        // Base case: an empty tree is considered as a BST
        if (node === null) {
          return true;
        }
      
        // Check if the current node violates the BST property
        if (node.val <= min || node.val >= max) {
          return false;
        }
      
        // Recursively check the left and right subtrees
        return (
          this.isBSTUtil(node.left, min, node.val) &&
          this.isBSTUtil(node.right, node.val, max)
        );
      }
      //check its BST or Not
      //
       isBST(root) {
        return this.isBSTUtil(root, 0, 100);
      }
      breadthFirst(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
      }
      preOrder(root){
        if(root){
            console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
        }
      }
      inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
        this.inOrder(root.right);
        }
      }
      postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
      }
}
const tree = new BinarySerchTree()
tree.insert(10)
tree.insert(5)
tree.insert(3)
tree.insert(15)
tree.insert(100)
tree.insert(2)
tree.delete(5)
tree.insert(10)
console.log(tree.search(tree.root,5)); 
console.log(tree.minValue(tree.root)); 

tree.print()
console.log(tree.isBSTUtil(tree.root)); 
console.log("breadth first")
tree.breadthFirst()
console.log(" preorder")
tree.preOrder(tree.root)
console.log(" INorder")
tree.inOrder(tree.root)
console.log(" INorder")
tree.inOrder(tree.root)







