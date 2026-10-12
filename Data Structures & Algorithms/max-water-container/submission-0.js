class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;

        let l = 0;
        let r = heights.length - 1;
        while (l < r) {
            const leftHeight = heights[l];
            const rightHeight = heights[r];

            const min = Math.min(leftHeight, rightHeight);
            const isLeftMin = min === leftHeight;

            const area = min * (r - l);
            if (area > max) {
                max = area;
            }

            if (isLeftMin) {
                l++;
            } else {
                r--;
            }
        }

        return max;
    }
}
