class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0;
        let end = s.length - 1;
        while (start < end) {
            if (!this.alphaNum(s[start])) {
                start++;
                continue;
            }

            if (!this.alphaNum(s[end])) {
                end--;
                continue;
            }

            if (s[start].toLowerCase() !== s[end].toLowerCase()) {
                return false;
            } else {
                start++;
                end--;
            }
        }

        return true;
    }

    alphaNum(char) {
        if (char >= "A" && char <= "Z") {
            return true;
        } else if (char >= "a" && char <= "z") {
            return true;
        } else if (char >= "0" && char <= "9") {
            return true;
        } else {
            return false;
        }
    }
}
