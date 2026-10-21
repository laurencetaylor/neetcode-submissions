class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operators = new Set(["+", "-", "*", "/"]);
        const stack = [];

        for (const token of tokens) {
            if (!operators.has(token)) {
                stack.push(parseInt(token));
                continue;
            }

            // it's an operator
            const second = stack.pop();
            const first = stack.pop();
            switch (token) {
                case "+":
                    stack.push(first + second);
                    break;
                case "-":
                    stack.push(first - second);
                    break;
                case "*":
                    stack.push(first * second);
                    break;
                case "/":
                    stack.push(Math.trunc(first / second));
                    break;
            }
        }

        return stack[0];
    }
}
