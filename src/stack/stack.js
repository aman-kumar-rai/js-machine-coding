class Stack {
    constructor() {
      this.data = [];
      this.size = 0;
    }
  
    /**
     * Pushes an item onto the top of the stack.
     * @param {*} item The item to be pushed onto the stack.
     * @return {number} The new length of the stack.
     */
    push(item) {
      this.data[this.size] = item;
      return ++this.size;
  
    }
  
    /**
     * Remove an item at the top of the stack.
     * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    pop() {
      if(this.size === 0) {
        return undefined;
      }
      else {
        const value = this.data[this.size - 1];
        this.size--;
        return value;
      }
    }
  
    /**
     * Determines if the stack is empty.
     * @return {boolean} `true` if the stack has no items, `false` otherwise.
     */
    isEmpty() {
      return this.length() === 0;
    }
  
    /**
     * Returns the item at the top of the stack without removing it from the stack.
     * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    peek() {
      return this.size === 0? undefined: this.data[this.size - 1];
    }
  
    /**
     * Returns the number of items in the stack.
     * @return {number} The number of items in the stack.
     */
    length() {
      return this.size;
    }
}

const stack = new Stack();
console.log(stack.isEmpty()); // true
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.length()); // 2
console.log(stack.push(3));
console.log(stack.peek()); // 3
console.log(stack.pop()); // 3
console.log(stack.isEmpty()); // false
