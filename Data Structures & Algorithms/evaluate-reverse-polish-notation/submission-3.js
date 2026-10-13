class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operands = new Set(["+", "-", "*", "/"]);

        const nums = [];
        for (const val of tokens) {
            if (!operands.has(val)) {
                nums.push(parseInt(val));
                continue;
            }

            const second = nums.pop();
            const first = nums.pop();

            if (operands.has(val)) {
                switch (val) {
                    case "+":
                        nums.push(first + second);
                        break;
                    case "-":
                        nums.push(first - second);
                        break;
                    case "*":
                        nums.push(first * second);
                        break;
                    case "/":
                        nums.push(Math.trunc(first / second));
                        break;
                }
            }
        }

        return nums[nums.length - 1];
    }
}
