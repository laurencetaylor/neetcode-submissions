class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // unique key per anagram, maps to array of the anagrams
        const map = {};
        for (const str of strs) {
            const freqs = Array.from({ length: 26 }, () => 0);
            for (const l of str) {
                const i = l.charCodeAt(0) - "a".charCodeAt(0);
                freqs[i]++;
            }

            const key = freqs.join(",");
            map[key] ??= [];
            map[key].push(str);
        }

        return Object.values(map);
    }
}
