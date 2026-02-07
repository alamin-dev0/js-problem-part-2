const products = [
    { name: 'Shampoo', Price: 300, quantity: 2 },
    { name: 'chiruni', Price: 100, quantity: 3 },
    { name: 'shirt', Price: 700, quantity: 5 },
    { name: 'pant', Price: 1200, quantity: 1 },
]

function cartTotal(products) {
    let total = 0;
    for (const product of products) {
        const thisProductCost = product.Price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}


const theTotalValue = cartTotal(products)
console.log(theTotalValue)
