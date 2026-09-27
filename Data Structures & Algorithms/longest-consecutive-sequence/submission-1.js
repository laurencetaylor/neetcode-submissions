class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);

        let len = 0;
        for (const num of nums) {
            const seq = [];
            if (!set.has(num - 1)) {
                let current = num;
                while (true) {
                    if (!set.has(current)) {
                        break;
                    } else {
                        seq.push(current);
                        current++;
                    }
                }
            }

            if (seq.length > len) {
                len = seq.length;
            }
        }

        return len;
    }
}
