
/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
 */


function woodQuantity(chairQuantity, tabilQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTabilWood = 10;
    const perBedWood = 50;




    const chairTotalWood = chairQuantity * perChairWood;
    const tabilTotalWood = tabilQuantity * perTabilWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tabilTotalWood + bedTotalWood;
    return totalWood;
}

const wood = woodQuantity(0, 0, 1)
console.log('Wood Needed', wood)


/**
 * shirt price ->> 500
 * pant price ->> 300
 * shoe price ->> 900
 * 
 */


function totalTk(shirtQuantity, pantQuantity, shoeQuantity) {
    const perShirt = 500;
    const perPant = 300;
    const perShoe = 900

    const shirtTotalTk = perShirt * shirtQuantity;
    const pantTotalTk = perPant * pantQuantity;
    const shoeTotalTk = perShoe * shoeQuantity;

    const totalMoney = shirtTotalTk + pantTotalTk + shoeTotalTk;
    return totalMoney;


}

const shoppingBudget = totalTk(5, 6, 3)
console.log(shoppingBudget)