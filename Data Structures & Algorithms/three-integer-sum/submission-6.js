class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        const res = [];

        for (let i = 0; i < nums.length - 2; i++) {
            const val = nums[i];
            if (i > 0 && val === nums[i - 1]) {
                continue;
            }

            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const leftVal = nums[l];
                const rightVal = nums[r];
                const sum = val + leftVal + rightVal;
                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.push([val, leftVal, rightVal]);

                    while (l < r && nums[l] === leftVal) {
                        l++;
                    }

                    while (l < r && nums[r] === rightVal) {
                        r--;
                    }
                }
            }
        }

        return res;
    }
}
