class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (map[target - num] !== undefined) {
                return [map[target - num], i];
            }

            map[num] = i;
        }
    }
}
