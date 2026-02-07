const phones = [
    { name: 'Samsung', Price: 23000, camera: '12mp', color: 'black' },
    { name: 'xoami', Price: 17000, camera: '12mp', color: 'black' },
    { name: 'Oppo', Price: 30000, camera: '12mp', color: 'black' },
    { name: 'Iphone', Price: 150000, camera: '12mp', color: 'black' },
    { name: 'Walton', Price: 14000, camera: '12mp', color: 'black' },
    { name: 'HTC', Price: 31000, camera: '12mp', color: 'black' },
    { name: 'Nokia', Price: 45000, camera: '12mp', color: 'black' },
]

function getCheapestPhone(mobiles) {
    let minValuePhone = mobiles[0]
    for (const mobls of mobiles) {
        // console.log(mobls)
        if (mobls.Price < minValuePhone.Price) {
            minValuePhone = mobls
        }
    }
    return minValuePhone;
}

const cheapestPhone = getCheapestPhone(phones)
console.log(cheapestPhone)


function getBiggustPhone(mobiles) {
    let theBigPriceP = mobiles[0]
    for (const phone of mobiles) {
        if (phone.Price > theBigPriceP.Price) {
            theBigPriceP = phone
        }
    }
    return theBigPriceP
}

const biggestPrice = getBiggustPhone(phones)
console.log(biggestPrice)