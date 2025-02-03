class MinHeap {
  constructor() {
    this.heap = [null];
    this.size = 0;
  }

  add(value) {
    this.heap.push(value);
    console.log(`.. Adding ${value}`);
    console.log(this.heap);
    this.size++;
    this.bubbleUp();
  }

  bubbleUp() {
    console.log("Bubble Up");
  }
}
module.exports = MinHeap;
