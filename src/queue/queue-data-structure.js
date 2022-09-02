class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE;
  }

  isEmpty() {
    return !this.queueControl.length;
  }

  enqueue(item) {
    if (canEnqueue()) {
      this.queueControl.unshift(item);
    } else {
      throw new Error("QUEUE_OVERFLOW");
    }
  }

  dequeue() {
    if (!this.isEmpty){
      this.queueControl.shift();
    } else {
      throw new Error('QUEUE_UNDERFLOW');
    }
  }

  display() {
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Queue;
