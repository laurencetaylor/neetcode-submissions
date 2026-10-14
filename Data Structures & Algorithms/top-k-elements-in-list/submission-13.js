class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for (const num of nums) {
            map[num] ??= 0;
            map[num]++;
        }

        const freqs = Array.from({ length: nums.length + 1 }, () => []);
        Object.entries(map).forEach(([num, freq]) => {
            freqs[freq].push(parseInt(num));
        });

        const res = [];
        for (let i = freqs.length - 1; i >= 0; i--) {
            for (const num of freqs[i]) {
                res.push(num);
                if (res.length === k) {
                    return res;
                }
            }
        }

        return res;
    }
}
