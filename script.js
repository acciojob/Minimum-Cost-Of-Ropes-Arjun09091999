class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.size() === 0) {
      return null;
    }

    const minValue = this.heap[0];
    const lastValue = this.heap.pop();

    if (this.size() > 0) {
      this.heap[0] = lastValue;
      this.heapifyDown(0);
    }

    return minValue;
  }

  heapifyUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);

    if (index > 0 && this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallestChildIndex = index;

    if (
      leftChildIndex < this.size() &&
      this.heap[leftChildIndex] < this.heap[smallestChildIndex]
    ) {
      smallestChildIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.size() &&
      this.heap[rightChildIndex] < this.heap[smallestChildIndex]
    ) {
      smallestChildIndex = rightChildIndex;
    }

    if (smallestChildIndex !== index) {
      this.swap(index, smallestChildIndex);
      this.heapifyDown(smallestChildIndex);
    }
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
}

function calculateMinCost(arr) {
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
