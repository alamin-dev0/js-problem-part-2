function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}
// const result = multiply(5 + 5, 7 + 3);
const result = multiply('5', 3);
// console.log(result)


function fullName(first, second) {
    if (typeof first !== 'string' || typeof second !== 'string') {
        return 'Please provide string'
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName('Al')
// const full = fullName(5, 7)
// console.log(full)

function getPrice(product) {

    if (typeof product !== 'object') {
        return 'Please provide an object '
    }
    const price = product.price;
    return price;
}

const theProduct = {
    name: 'Molom',
    price: 45,
    color: 'green'
}
const price = getPrice(theProduct)
// const price = getPrice(6)
console.log(price)


function getSecond(numbers) {
    if (Array.isArray(numbers) === false) {
        return 'Please provide An Array'
    }
    const second = numbers[1];
    return second;
}
const second = getSecond([55, 33, 22, 11])
console.log(second)