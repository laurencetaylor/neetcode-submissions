class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        while (l < r) {
            const leftChar = s[l].toLowerCase();
            const rightChar = s[r].toLowerCase();
            if (!this.isAlphaNum(leftChar)) {
                l++;
                continue;
            }

            if (!this.isAlphaNum(rightChar)) {
                r--;
                continue;
            }

            if (leftChar !== rightChar) {
                return false;
            } else {
                l++;
                r--;
            }
        }

        return true;
    }

    isAlphaNum(char) {
        const isNum = char >= "0" && char <= "9";
        const isLetter = char >= "a" && char <= "z";

        return isNum || isLetter;
    }
}
