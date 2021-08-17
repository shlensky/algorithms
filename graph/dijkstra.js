function getCheapest(costs, processed) {
    let minCost = Infinity;
    let minNode = null;

    for (let node of Object.keys(costs)) {
        if (costs[node] < minCost && !processed.has(node)) {
            minCost = costs[node];
            minNode = node;
        }
    }

    processed.add(minNode);
    return minNode;
}

function pathToString(parents, from, to) {
    let node = to;
    let nodes = [];
    while (node) {
        nodes.push(node);

        node = parents[node];
    }

    return nodes.reverse().join(' -> ');
}

function findPath(graph, from, to) {
    const costs = { [from]: 0 };
    const parents = {};
    const processed = new Set();

    let cheapest = from;
    while (cheapest) {
        const neighbors = graph[cheapest];
        for (let neighbor of Object.keys(neighbors)) {
            const newCost = costs[cheapest] + neighbors[neighbor];
            if (!costs[neighbor] || costs[neighbor] > newCost) {
                costs[neighbor] = newCost;
                parents[neighbor] = cheapest;
            }
        }

        cheapest = getCheapest(costs, processed)
    }

    console.log({costs});
    console.log({parents});

    return pathToString(parents, from, to);
}

const graph1 = {
    start: { a: 6, b: 2 },
    a: { fin: 1 },
    b: { a: 3, fin: 5 },
    fin: {}
};
console.log(findPath(graph1, 'start', 'fin'));

const graph2 = {
    start: { a: 5, b: 2 },
    a: { c: 4, d: 2 },
    b: { a: 8, d: 7 },
    c: { d: 6, fin: 3 },
    d: { fin: 1 },
    fin: {}
};
console.log(findPath(graph2, 'start', 'fin'));
