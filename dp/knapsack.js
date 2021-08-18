function knapsack(goods, capacity) {
    const table = [];
    for (let i = 0; i < goods.length; i++) {
        table[i] = [];

        for (let c = 0; c < capacity; c++) {
            const fit = goods[i].weight <= (c + 1);
            if (!fit) {
                table[i][c] = i > 0 ? table[i - 1][c] : { price: 0, goods: `empty(${c + 1})` };
                continue;
            }

            const free = (c + 1) - goods[i].weight;
            if (free > 0 && i > 0) {
                const cell = table[i - 1][free - 1];
                table[i][c] = {
                    price: cell.price + goods[i].price,
                    goods: cell.goods + ', ' + goods[i].name
                };
            } else {
                table[i][c] = { price: goods[i].price, goods: goods[i].name };
            }

            if (i > 0 && table[i][c].price < table[i - 1][c].price) {
                table[i][c] = table[i - 1][c];
            }
        }
    }

    console.log(table)
}


const goods = [
    { name: 'guitar',   price: 1500, weight: 1 },
    { name: 'notebook', price: 2000, weight: 3 },
    { name: 'player',   price: 3000, weight: 4 },
    { name: 'iphone',   price: 2000, weight: 1 },
];

knapsack(goods, 4);
