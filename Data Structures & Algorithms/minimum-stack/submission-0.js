class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        const min = this.getMin();
        if (val <= min || min === undefined) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const val = this.stack.pop();
        if (this.getMin() === val) {
            this.minStack.pop();
        }

        return val;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
