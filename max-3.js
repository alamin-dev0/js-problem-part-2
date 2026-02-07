const num1 = 56;
const num2 = 89;
const num3 = 68;

if (num1 > num2 && num1 > num3) {
    console.log('Jim is the ultimate boss')
}
else if (num2 > num1 && num2 > num3) {
    console.log('tim is the boss')
}
else {
    console.log('kim is the kardashian boss')
}


function maxOfThree(num1, num2, num3) {

    if (num1 > num2 && num1 > num3) {
        console.log('Jim is the ultimate boss')
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        console.log('tim is the boss')
        return num2;
    }
    else {
        console.log('kim is the kardashian boss')
        return num3;
    }

}
const theMaxvalue = maxOfThree(num1, num2, num3)
console.log(theMaxvalue)



const max = Math.max(33, 44, 55, 66, 77, 11, 99)
console.log('Max issuing math.max', max)