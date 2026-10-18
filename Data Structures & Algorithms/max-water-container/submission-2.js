class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;

        let l = 0;
        let r = heights.length - 1;
        while (l < r) {
            const area = Math.min(heights[l], heights[r]) * (r - l);
            if (area > maxArea) {
                maxArea = area;
            }

            if (heights[l] > heights[r]) {
                r--;
            } else {
                l++;
            }
        }

        return maxArea;
    }
}
