const prices = [20000, 16000, 50000, 100000, 12000, 30000, 45000]

function getMin(numbers) {
    let min = prices[0]
    for (const price of numbers) {
        if (price < min) {
            min = price
        }
    }
    return min;
}

const theMin = getMin(prices)
console.log('The min value is :::', theMin)