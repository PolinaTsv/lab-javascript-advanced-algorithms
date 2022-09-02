class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.MAX_SIZE > this.stackControl.length) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    return !stackControl.length;
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item);
    } else {
      throw new Error('STACK_OVERFLOW');
    }
  }

  pop() {
    if (!this.isEmpty()){
      this.stackControl.pop();
    } else {
      throw new Error('STACK_UNDERFLOW');
    }
  }

  display() {
    return this.stackControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Stack;
