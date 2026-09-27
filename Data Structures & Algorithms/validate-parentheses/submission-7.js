class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (["(", "{", "["].includes(char)) {
                stack.push(char);
                continue;
            }

            const lastOpen = stack.pop();
            if (!lastOpen) {
                return false;
            }
            
            if (lastOpen === "(" && char !== ")") {
                return false;
            } else if (lastOpen === "{" && char !== "}") {
                return false;
            } else if (lastOpen === "[" && char !== "]") {
                return false;
            }
        }

        return !stack.length;
    }
}
