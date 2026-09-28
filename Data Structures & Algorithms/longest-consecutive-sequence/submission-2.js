class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);

        let res = 0;
        for (const num of nums) {
            const seq = [];
            if (!set.has(num - 1)) {
                let current = num;
                while (true) {
                    if (set.has(current)) {
                        seq.push(current);
                        current++;
                    } else {
                        break;
                    }
                }
            }

            if (seq.length > res) {
                res = seq.length;
            }
        }

        return res;
    }
}
