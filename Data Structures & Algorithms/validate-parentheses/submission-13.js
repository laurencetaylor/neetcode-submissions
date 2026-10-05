class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
       const openToClose = {
            "(": ")",
            "{": "}",
            "[": "]"
       };

        const stack = [];
        for (const char of s) {
            if (Object.keys(openToClose).includes(char)) {
                stack.push(char);
                continue;
            }

            if (openToClose[stack.pop()] !== char) {
                return false;
            }
        }

        return !stack.length;
    }
}
