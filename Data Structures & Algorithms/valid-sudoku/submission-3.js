class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = {};
        const cols = {};
        const squares = {};

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const num = board[row][col];
                if (num === ".") {
                    continue;
                }
                
                if (rows[row]?.has(num)) {
                    return false;
                }

                if (cols[col]?.has(num)) {
                    return false;
                }

                const key = `${Math.floor(row / 3)}${Math.floor(col / 3)}`;
                if (squares[key]?.has(num)) {
                    return false;
                }

                rows[row] ??= new Set();
                cols[col] ??= new Set();
                squares[key] ??= new Set();

                rows[row].add(num);
                cols[col].add(num);
                squares[key].add(num);
            }
        }

        return true;
    }
}
