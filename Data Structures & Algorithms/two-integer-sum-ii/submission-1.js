class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for (let i = 0; i < numbers.length; i++) {
            const num1 = numbers[i];
            if (num1 === numbers[i - 1]) {
                continue;
            }
            
            for (let j = i + 1; j < numbers.length; j++) {
                const num2 = numbers[j];
                if (num1 + num2 === target) {
                    return [i + 1, j + 1];
                } else if (num1 + num2 > target) {
                    break;
                }
            }
        }
    }
}
