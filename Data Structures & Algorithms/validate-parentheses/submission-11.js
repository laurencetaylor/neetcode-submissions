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

        if (Object.keys(closeToOpen).includes(s[0])) {
            return false;
        }

        const stack = [];
        for (const char of s) {
            if (Object.values(closeToOpen).includes(char)) {
                stack.push(char);
            } else if (closeToOpen[char] !== stack.pop()) {
                return false;
            }
        }

        return !stack.length;
    }
}
