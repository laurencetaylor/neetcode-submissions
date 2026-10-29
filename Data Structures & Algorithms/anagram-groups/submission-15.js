class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for (const str of strs) {
            const freqs = new Array(26).fill(0);
            for (const char of str) {
                freqs[char.charCodeAt(0) - "a".charCodeAt(0)]++;
            }

            const key = freqs.join(",");

            map[key] ??= [];
            map[key].push(str);
        }

        return Object.values(map);

    }
}
