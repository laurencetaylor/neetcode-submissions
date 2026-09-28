class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // map row number -> set of values
        // map column number -> set of values
        // create unique key for square (co-ord) -> set of values
        // O(1) lookups for each of these as we iterate. if we find a dupe, return false
        // else, return true

        const rows = {};
        const cols = {};
        const squares = {};

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const val = board[row][col];
                if (val === ".") {
                    continue;
                }

                rows[row] ??= new Set();
                cols[col] ??= new Set();
                const key = `${Math.floor(row / 3)}${Math.floor(col / 3)}`;
                squares[key] ??= new Set();

                if (rows[row].has(val) || cols[col].has(val) || squares[key].has(val)) {
                    return false;
                } else {
                    rows[row].add(val);
                    cols[col].add(val);
                    squares[key].add(val);
                }
            }
        }

        return true;
    }
}
