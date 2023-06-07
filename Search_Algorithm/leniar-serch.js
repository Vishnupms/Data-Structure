function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Return the index if the target is found
      }
    }
    return -1; // Return -1 if the target is not found
  }
  
  // Example usage:
  const arr = [4, 2, 7, 1, 9, 5];
  const target = 7;
  const index = linearSearch(arr, target);
  
  if (index !== -1) {
    console.log(`Target ${target} found at index ${index}`);
  } else {
    console.log(`Target ${target} not found in the array`);
  }
  