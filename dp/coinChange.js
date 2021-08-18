// https://leetcode.com/problems/coin-change/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) return 0;

    const dp = [new Array(amount + 1).fill(Infinity)];

    for (let i = 1; i <= coins.length; i++) {
        const coin = coins[i - 1];
        dp[i] = [];

        for (let a = 1; a <= amount; a++) {
            dp[i][a] = dp[i - 1][a];

            for (let cc = 1; coin * cc <= a; cc++) {
                let rest = a - (coin * cc);
                if (rest > 0) {
                    rest = dp[i][rest];
                }

                const newMin = cc + rest;
                if (newMin < dp[i][a]) {
                    dp[i][a] = newMin;
                }
            }
        }
    }

    const result = dp[dp.length - 1][amount];
    return result === Infinity ? -1 : result;

};

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0));  // 0
console.log(coinChange([1], 1));  // 1
console.log(coinChange([1], 2));  // 2
console.log(coinChange([83, 186, 408, 419], 6249));  // 20
