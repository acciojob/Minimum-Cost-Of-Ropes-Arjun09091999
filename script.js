function calculateMinCost() {
  //your code here
  const minHeap = new MinHeap();
  for (let i = 0; i < arr.length; i++) {
    minHeap.insert(arr[i]);
  }
  
  let totalCost = 0;
  
  // Merge the ropes until only one rope is left in the heap
  while (minHeap.size() > 1) {
    // Extract the two smallest ropes from the heap
    const rope1 = minHeap.extractMin();
    const rope2 = minHeap.extractMin();
    
    // Calculate the cost of merging the two ropes
    const cost = rope1 + rope2;
    
    // Add the cost to the total cost
    totalCost += cost;
    
    // Insert the merged rope back into the heap
    minHeap.insert(cost);
  }
  
  return totalCost;
}

// Test the function
const arr = [4, 2, 7, 6, 9];
const minCost = calculateMinCost(arr);
console.log(minCost); // Output: 62
