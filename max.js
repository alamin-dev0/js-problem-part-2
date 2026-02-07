const disha = 56;
const salman = 95;

if (disha > salman) {
    console.log('disha will get the strawberry ')
}
else {
    console.log('salman will eat the strawberry ')
}


// inside a function 

function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

const max = getMax(56, 79)
const max2 = getMax(99, 88)
const ultimateMax = getMax(max, max2)
// console.log('max of two is ', max)
console.log('max of two is ', ultimateMax)