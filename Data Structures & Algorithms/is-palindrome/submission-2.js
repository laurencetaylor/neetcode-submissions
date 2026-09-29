class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            if (!this.alphaNum(s[left])) {
                left++;
                continue;
            } 
            
            if (!this.alphaNum(s[right])) {
                right--;
                continue;
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    alphaNum(char) {
        const isLowerCase = char >= "a" && char <= "z";
        const isUpperCase = char >= "A" && char <= "Z";
        const isNumber = char >= "0" && char <= "9";

        return isLowerCase || isUpperCase || isNumber;
    }
}
