function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood= 50;

    const chairTotalWood= perChairWood * chairQuantity;
    const tableTotalWood= perTableWood * tableQuantity;
    const bedTotalWood  = perBedWood   * bedQuantity;

    const totalWood= chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

const wood=woodQuantity(0,1,0);
console.log(wood);