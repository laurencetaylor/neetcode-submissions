class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (const str of strs) {
            res += str.length + "#" + str;;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];

        let i = 0;
        while (i < str.length) {
            let cursor = i;
            while (str[cursor] !== "#") {
                cursor++;
            }

            const len = parseInt(str.substring(i, cursor));
            i = cursor + 1;
            cursor = i + len;
            res.push(str.substring(i, cursor));
            i = cursor;
        }

        return res;
    }
}
