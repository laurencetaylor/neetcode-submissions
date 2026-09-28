class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // create map of freqs
        // iterate the entries -> map to 2D array of freqs
        // iterate from end of array until we find the K most frequent

        const map = {};
        for (const num of nums) {
            map[num] ??= 0;
            map[num]++;
        }

        const freqs = Array.from({ length: nums.length + 1 }, () => []);
        Object.entries(map).forEach(([num, freq]) => {
            freqs[freq].push(parseInt(num));
        });

        const result = [];
        for (let i = freqs.length - 1; i >= 0; i--) {
            const current = freqs[i];
            for (const n of current) {
                result.push(n);
                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
