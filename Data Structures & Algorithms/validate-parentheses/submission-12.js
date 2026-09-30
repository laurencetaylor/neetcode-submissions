class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closeToOpen = {
            ")": "(",
            "}": "{",
            "]": "["
        }

        const stack = [];

        for (const char of s) {
            if (Object.values(closeToOpen).includes(char)) {
                stack.push(char);
                continue;
            }

            const lastOpen = stack.pop();
            if (closeToOpen[char] !== lastOpen) {
                return false;
            }
        }

        return !stack.length;
    }
}
