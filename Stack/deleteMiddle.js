function deleteMiddleElement(stack) {
    if (stack.length === 0) {
      return; // Stack is empty, nothing to delete
    }
  
    const middle = stack.length % 2 === 0 ? stack.length / 2 - 1 : Math.floor(stack.length / 2);
  
    deleteAtIndex(stack, middle);
  }
  
  function deleteAtIndex(stack, index) {
    stack.splice(index, 1);
    console.log(index)
  }
  
  // Example usage:
  const stack = [1, 2, 3, 4, 5];
  console.log("Before deletion:", stack);
  
  deleteMiddleElement(stack);
  console.log("After deletion:", stack);
  