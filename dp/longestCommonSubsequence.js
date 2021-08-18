// https://leetcode.com/problems/longest-common-subsequence/
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const dp = [];
    let max = 0;
    for (let i = 0; i < text1.length; i++) {
        dp[i] = [];
        for (let j = 0; j < text2.length; j++) {
            if (text1[i] === text2[j]) {
                dp[i][j] = (i === 0 || j === 0) ? 1 : dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(
                    i === 0 ? 0 : dp[i - 1][j],
                    j === 0 ? 0 : dp[i][j - 1]
                );
            }

            if (dp[i][j] > max) max = dp[i][j];
        }
    }

    return max;
};

console.log(longestCommonSubsequence("abcde", "ace")); // 3
console.log(longestCommonSubsequence("abc", "abc")); // 3
console.log(longestCommonSubsequence("abc", "def")); // 0
