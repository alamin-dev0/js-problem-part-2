const products = [
    { name: 'Shampoo', Price: 300 },
    { name: 'chiruni', Price: 100 },
    { name: 'shirt', Price: 700 },
    { name: 'pant', Price: 1200 },
]

function getShoppingTotal(products) {
    let theTotalSum = 0;
    for (const product of products) {
        theTotalSum = theTotalSum + product.Price
    }
    return theTotalSum
}
const theTotal = getShoppingTotal(products)
console.log(theTotal)