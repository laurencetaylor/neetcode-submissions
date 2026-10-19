class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = {};
        if (s.length !== t.length) {
            return false;
        }

        for (const char of s) {
            map[char] ??= 0;
            map[char]++;
        }

        for (const char of t) {
            if (map[char] === undefined) {
                return false;
            }

            map[char]--
            if (map[char] < 0) {
                return false;
            }
        }

        return true;
    }
}
