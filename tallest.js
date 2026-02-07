const heights = [65, 66, 72, 78, 80, 61, 60,99]

function getMax(numbers) {
    let max = [numbers[0]]
    for (const num of numbers) {
        if (num > max) {
            max = num
        }
        console.log(num)
    }
    return max;
}

const max = getMax(heights)
console.log('The max value is', max)


function getMax(numbers) {
    let max = [numbers[0]]
    for (const num of numbers) {
        if (num < max) {
            max = num
        }
        console.log(num)
    }
    return max;
}

const min = getMax(heights)
console.log('The min value is', max)