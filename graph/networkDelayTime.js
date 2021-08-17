// https://leetcode.com/problems/network-delay-time/
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const graph = {};
    for (let time of times) {
        if (!graph[time[0]]) graph[time[0]] = [];
        graph[time[0]].push({ to: time[1], cost: time[2] });
    }

    const costs = { [k]: 0 };
    const visited = new Set();

    let cheapest = k;
    while (cheapest) {
        const neighbors = graph[cheapest];
        if (neighbors) {
            for (let neighbor of neighbors) {
                let cost = costs[cheapest] + neighbor.cost;
                if (costs[neighbor.to] === undefined || costs[neighbor.to] > cost) {
                    costs[neighbor.to] = cost;
                }
            }
        }

        visited.add(cheapest);

        let minCost = Infinity;
        cheapest = undefined;
        for (let node of Object.keys(costs)) {
            if (minCost > costs[node] && !visited.has(node)) {
                minCost = costs[node];
                cheapest = node;
            }
        }
    }

    if (Object.keys(costs).length !== n) return -1;

    return Math.max.apply(Math, Object.values(costs));
};

console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2)); // 2
console.log(networkDelayTime([[1,2,1]], 2, 1)); // 1
console.log(networkDelayTime([[1,2,1]], 2, 2)); // -1
console.log(networkDelayTime([[1,2,1],[2,1,3]], 2, 2)); // 3
console.log(networkDelayTime([[1,2,1],[2,3,2],[1,3,1]], 3, 2)); // -1
