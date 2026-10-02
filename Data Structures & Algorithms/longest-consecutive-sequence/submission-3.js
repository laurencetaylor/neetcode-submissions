class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        // iterate through nums, check if set contains num - 1
        // if not, that's the start of a sequence
        // iterate up until the sequence ends (check set if num + x exists)
        // store the len if it's the longest sequence

        let res = 0;
        for (const num of nums) {
            if (set.has(num - 1)) {
                continue;
            }

            let current = num;
            while (set.has(current)) {
                current++;
            }

            if (current - num > res) {
                res = current - num;
            }
        }

        return res;
    }
}
